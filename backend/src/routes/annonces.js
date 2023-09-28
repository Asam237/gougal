const express = require("express");
const router = express.Router();
const Consts = require("../config/consts");
const ErrorCodes = require("../config/error_codes");
const Annonce = require("../models/annonces");

router.post("/", async (req, res) => {
    const {name, position, phone, mail, marker, title, description, approve} = req.body;
    if (name == null || position == null || phone == null || mail == null || marker == null || title == null || description == null)
        return res.status(400).send(Consts.standardErrorResponse(ErrorCodes.INVALID_PARAMS));
    let annonce = Annonce.register({name, position, phone, mail, marker, title, description, approve: false});
    annonce = await annonce.save();
    let r = Consts.newResponse();
    r.annonce = annonce;
    return res.status(200).send(r);
});

router.get("/", (req, res) => {
    let page = req.query.page ? Number.parseInt(req.query.page) : 0;
    let size = req.query.size ? Number.parseInt(req.query.size) : 20;
    Annonce.findPaginated({}, page, size).then(async (annonces) => {
        let total = await Annonce.count({});
        let r = Consts.newResponse();
        r.annonce = {
            "size": Math.min(size, total),
            "total": total,
            "page": page,
            "content": annonces
        };
        return res.status(200).send(r);
    }, (err) => Consts.errorFallback(err, res));
});

router.get("/:annonce", (req, res) => {
    let annonceId = req.params.annonce;
    Annonce.getOne({_id: annonceId}).then((annonce) => {
        if (annonce == null)
            return res.status(200).send(Consts.standardErrorResponse(ErrorCodes.INVALID_PARAMS));
        let r = Consts.newResponse();
        r.annonce = annonce;
        return res.status(200).send(r);
    }, (err) => Consts.errorFallback(err, res));
});

router.put("/:annonce", (req, res) => {
    let annonceId = req.params.annonce;
    Annonce.getOne({_id: annonceId}).then(async (annonce) => {
        if (annonce == null)
            return res.status(400).send(Consts.standardErrorResponse(ErrorCodes.INVALID_PARAMS));
        annonce.approve = true;
        annonce = await annonce.save();
        let r = Consts.newResponse();
        r.annonce = annonce;
        return res.status(200).send(r);
    }, (err) => Consts.errorFallback(err, res));
});

module.exports = router;