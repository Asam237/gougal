const express = require("express");
const router = express.Router();
const User = require("../models/user");
const ErrorCode = require("../config/error_codes");
const Consts = require("../config/consts");

/**
 * @swagger
 * tags:
 *     name: User
 * /users/register:
 *     post:
 *         summary: Création d'un nouvel utilisateur
 *         tags: [User]
 *         requestBody:
 *             required: true
 *             content:
 *                 application/json:
 *                     schema:
 *                         type: object
 *                         properties:
 *                             full_name:
 *                                 type: String
 *                             email:
 *                                 type: String
 *                             password:
 *                                 type: String
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
 *                                     properties:
 *                                      full_name:
 *                                          type: string
 *                                      email:
 *                                          type: string
 *                                      password:
 *                                          type: string
 */
router.post("/register", async (req, res) => {
    const {full_name, email, password} = req.body;
    if (full_name === null || email === null || password === null) return res.status(400).send(Consts.standardResponse(ErrorCode.MISSING_PARAMS))
    let user = User.register({
        full_name, email
    });
    user.setPassword(password);
    user = await user.save();
    let r = Consts.newResponse();
    r.user = user;
    return res.status(200).send(r)
}, (err) => Consts.errFallback(err, res));


/**
 * @swagger
 * tags:
 *     name: User
 * /users/login:
 *     post:
 *         summary: Login
 *         tags: [User]
 *         requestBody:
 *             required: true
 *             content:
 *                 application/json:
 *                     schema:
 *                         type: object
 *                         properties:
 *                             email:
 *                                 type: String
 *                             password:
 *                                 type: String
 *         responses:
 *             200:
 *                 description: L'objet User
 *                 content:
 *                     application/json:
 *                         schema:
 *                             type: object
 *                             properties:
 *                                 user:
 *                                     type: object
 *                                     properties:
 *                                      email:
 *                                          type: string
 *                                      password:
 *                                          type: string
 */
router.post("/login", async (req, res) => {
    const {email, password} = req.body;
    if (email === null || password === null) return res.status(400).send(Consts.standardResponse(ErrorCode.MISSING_PARAMS));
    User.findOne({email: email}).then(async (user) => {
        if (user === null) return res.status(400).send(Consts.standardResponse(ErrorCode.INVALID_PARAMS));
        if (user.isCorrectPassword(password)) {
            let r = Consts.newResponse();
            r.user = await User.getOne({_id: user._id});
            r.user.auth_token = user.setAuthToken();
            await user.save();
            return res.status(200).send(r);
        } else {
            return res.status(400).send(Consts.standardResponse(ErrorCode.INVALID_PARAMS));
        }
    }, (err) => Consts.errFallback(err, res));
}, (err) => Consts.errFallback(err, res));

/**
 * @swagger
 * tags:
 *     name: User
 * /users/{me}:
 *     get:
 *         summary: Utilisateur courant
 *         tags: [User]
 *         parameters:
 *             - name: me
 *               in: path
 *               description: l'user
 *         responses:
 *             200:
 *                 description: L'utilisateur courant
 *                 content:
 *                     application/json:
 *                         schema:
 *                             type: object
 *                             properties:
 *                                 user:
 *                                     type: object
 *                                     properties:
 *                                      full_name:
 *                                          type: string
 *                                      email:
 *                                          type: string
 *                                      password:
 *                                          type: string
 *
 */
// router.get("/:me", async (req, res) => {
//     const me = req.params.me;
//     User.findOne({_id: me}).then(async (user) => {
//         if (!user)
//             return res.status(200).send(Consts.standardResponse(ErrorCode.INVALID_PARAMS));
//         let r = Consts.newResponse();
//         r.user = user;
//         return res.status(200).send(r);
//     }, (err) => Consts.errorFallback(err, res));
// });

module.exports = router;