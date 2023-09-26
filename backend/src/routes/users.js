const express = require("express");
const router = express.Router();
const Consts = require("../config/consts");
const ErrorCodes = require("../config/error_codes");
const User = require("../models/user");
const Security = require("../services/security");
const Roles = require("../services/roles");

/**
 * @swagger
 * tags:
 *     name: Users
 * /users:
 *     get:
 *         summary: Liste des utilisateurs
 *         tags: [Users]
 *         description: Role READ_MANAGEMENT
 *         parameters:
 *             - name: page
 *               in: query
 *               description: le numéro de page
 *               example: 0
 *             - name: size
 *               in: query
 *               description: le nombre d'éléments par page
 *               example: 20
 *         responses:
 *             200:
 *                 description: La liste des utilisateurs de la plateforme
 *                 content:
 *                     application/json:
 *                         schema:
 *                             type: object
 *                             properties:
 *                                 users:
 *                                     type: object
 *                                     properties:
 *                                         size:
 *                                             type: number
 *                                         page:
 *                                             type: number
 *                                         total:
 *                                             type: number
 *                                         content:
 *                                             type: array
 */
router.get("/users", Security.authentication, Roles.hasReadManagement, function (req, res) {
    let page = req.query.page ? Number.parseInt(req.query.page) : 0;
    let size = req.query.size ? Number.parseInt(req.query.size) : 20;

    User.findPaginated({}, page, size).then(async function (users) {
        let total = await User.count({});

        let r = Consts.newResponse();
        r.users = {
            "size": Math.min(size, total),
            "page": page,
            "total": total,
            "content": users
        };
        return res.status(200).send(r);
    }, (err) => Consts.errorFallback(err, res));
});

/**
 * @swagger
 * tags:
 *     name: Users
 * /users/{userid}:
 *     get:
 *         summary: Informations d'un utilisateur
 *         tags: [Users]
 *         description: Role READ_MANAGEMENT
 *         parameters:
 *             - name: userid
 *               in: path
 *               description: l'id de l'utilisateur
 *         responses:
 *             200:
 *                 description: Les informations de l'utilisateurs demandé
 *                 content:
 *                     application/json:
 *                         schema:
 *                             type: object
 *                             properties:
 *                                 user:
 *                                     type: object
 */
router.get("/users/:userid", Security.authentication, Roles.hasReadManagement, function (req, res) {
    let userid = req.params.userid;

    User.getOne({_id: userid}).then(function (user) {
        if (user == null)
            return res.status(400).send(Consts.standardErrorResponse(ErrorCodes.INVALID_PARAMS));

        let r = Consts.newResponse();
        r.user = user;
        return res.status(200).send(r);
    }, (err) => Consts.errorFallback(err, res));
});

/**
 * @swagger
 * tags:
 *     name: Users
 * /users:
 *     post:
 *         summary: Création d'un nouvel utilisateur
 *         tags: [Users]
 *         description: Role WRITE_MANAGEMENT
 *         requestBody:
 *             required: true
 *             content:
 *                 application/json:
 *                     schema:
 *                         type: object
 *                         properties:
 *                             first_name:
 *                                 type: String
 *                             last_name:
 *                                 type: String
 *                             email:
 *                                 type: String
 *                             roles:
 *                                 type: Array
 *         responses:
 *             200:
 *                 description: L'objet User a ete cree
 *                 content:
 *                     application/json:
 *                         schema:
 *                             type: object
 *                             properties:
 *                                 user:
 *                                     type: object
 *                                     description: L'objet User qui vient de se creer
 *                                 password:
 *                                     type: string
 *                                     description: le mot de passe du nouvel utilsateur
 */
router.post("/users", Security.authentication, Roles.hasWriteManagement, async (req, res) => {
  const { first_name, last_name, email, roles } = req.body;

  if (first_name == null || last_name == null || email == null || roles == null)
    return res.status(400).send(Consts.standardErrorResponse(ErrorCodes.MISSING_PARAMS));
  if (!(roles instanceof Array) || roles.length === 0)
    return res.status(400).send(Consts.standardErrorResponse(ErrorCodes.INVALID_PARAMS));
  let rolesList = Object.values(User.enums.role);
  if (roles.some((r) => !rolesList.includes(r)))
    return res.status(400).send(Consts.standardErrorResponse(ErrorCodes.INVALID_PARAMS));

  let createdUser = User.register({
    first_name,
    last_name,
    email,
    roles,
  });
  let password = createdUser.resetPassword();
  createdUser = await createdUser.save();

  let r = Consts.newResponse();
  r.user = createdUser;
  r.password = password;
  return res.status(200).send(r);
});

/**
 * @swagger
 * tags:
 *     name: Users
 * /user/password:
 *     patch:
 *         summary: Changement de mot de passe
 *         tags: [Users]
 *         requestBody:
 *             required: true
 *             content:
 *                 application/json:
 *                     schema:
 *                         type: object
 *                         properties:
 *                             old_password:
 *                                 type: String
 *                             new_password:
 *                                 type: String
 *         responses:
 *             200:
 *                 description: Le retour standard
 *             400:
 *                 description: Paramètre manquant ou Ancien mot de passe incorrect
 */
router.patch("/user/password", Security.authentication, function (req, res) {
  let oldPassword = req.body.old_password;
  let newPassword = req.body.new_password;

  if (oldPassword == null || newPassword == null)
    return res
      .status(400)
      .send(Consts.standardErrorResponse(ErrorCodes.MISSING_PARAMS));

  User.findById(req._id).then(
    async function (user) {
      if (user.isCorrectPassword(oldPassword)) {
        // definition du nouveau mot de passe
        user.setPassword(newPassword);
        await user.save();

        return res.status(200).send(Consts.newResponse());
      } else {
        return res.status(400).send(Consts.standardErrorResponse(ErrorCodes.USER_INCORRECT_PASSWORD));
      }
    },
    (err) => Consts.errorFallback(err, res)
  );
});

/**
 * @swagger
 * tags:
 *     name: Users
 * /user/password/reset/{user}:
 *     patch:
 *         summary: Réinitialisation du mot de passe d'un utilisateur
 *         tags: [Users]
 *         description: Role WRITE_MANAGEMENT
 *         responses:
 *             200:
 *                 description: Le nouveau mot de passe de l'utilisateur
 *                 content:
 *                     application/json:
 *                         schema:
 *                             type: object
 *                             properties:
 *                                 password:
 *                                     type: String
 *             400:
 *                 description: Paramètre invalide
 */
router.patch("/user/password/reset/:user", Security.authentication, Roles.hasWriteManagement, function (req, res) {
    let user = req.params.user;

    User.findById(user).then(async function (user) {
        if (user == null)
            return res.status(400).send(Consts.standardErrorResponse(ErrorCodes.INVALID_PARAMS));

        let newPassword = user.resetPassword();
        await user.save();
        let r = Consts.newResponse();
        r.password = newPassword;
        return res.status(200).send(r);
    });
});

/**
 * @swagger
 * tags:
 *     name: Users
 * /users/{userid}:
 *     patch:
 *         summary: Editer les informations d'un utilisateur
 *         tags: [Users]
 *         description: Role WRITE_MANAGEMENT
 *         parameters:
 *             - name: userid
 *               in: path
 *               description: l'élève cible
 *         requestBody:
 *             required: true
 *             content:
 *                 application/json:
 *                     schema:
 *                         type: object
 *                         properties:
 *                             first_name:
 *                                 type: String
 *                             last_name:
 *                                 type: String
 *                             roles:
 *                                 type: Array
 *                             active:
 *                                 type: Boolean
 *         responses:
 *             200:
 *                 description: L'objet User mis à jour
 *             400:
 *                 description: Paramètre manquant, invalide ou utilisateur inexistant
 */
router.patch("/users/:userid", Security.authentication, Roles.hasWriteManagement, function (req, res) {
  let userid = req.params.userid;
  let first_name = req.body.first_name;
  let last_name = req.body.last_name;
  let roles = req.body.roles;
  let active = req.body.active;

  if (roles != null) {
    if (!(roles instanceof Array) || roles.length === 0)
      return res
        .status(400)
        .send(Consts.standardErrorResponse(ErrorCodes.INVALID_PARAMS));
    let rolesList = Object.values(User.enums.role);
    if (roles.some((r) => !rolesList.includes(r)))
      return res
        .status(400)
        .send(Consts.standardErrorResponse(ErrorCodes.INVALID_PARAMS));
  }

  User.getOne({_id: userid}).then(
    async function (user) {
      if (user == null)
        return res.status(400).send(Consts.standardErrorResponse(ErrorCodes.USER_NOT_FOUND));

      user.first_name = first_name ?? user.first_name;
      user.last_name = last_name ?? user.last_name;
      user.roles = roles ?? user.roles;
      user.active = active ?? user.active;
      
      user = await user.save();
      let r = Consts.newResponse();
      r.user = user;
      return res.status(200).send(r);
    },
    (err) => Consts.errorFallback(err, res)
  );
});

/**
 * @swagger
 * tags:
 *     name: Users
 * /{user_id}:
 *     delete:
 *         summary: Supprimer un utilisateur
 *         tags: [Users]
 *         description: Role WRITE_MANAGEMENT
 *         parameters:
 *             - name: user_id
 *               in: path
 *               description: l'utilisateur cible
 *         responses:
 *             200:
 *                 description: Le retour standard
 *             400:
 *                 description: paramètres invalides
 */
router.delete("/:user_id", Security.authentication, Roles.hasWriteManagement, (req, res) => {
    let user_id = req.params.user_id;
    User.findOne({_id: user_id}).then(async (user) => {
        if (user == null)
            return res.status(400).send(Consts.standardErrorResponse(ErrorCodes.INVALID_PARAMS))
        await user.setDeleted();
        return res.status(200).send(Consts.newResponse());
    }, (err) => Consts.errorFallback(err, res));
});

module.exports = router;
