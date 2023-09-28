const express = require("express");
const router = express.Router();
const Consts = require("../config/consts");
const ErrorCodes = require("../config/error_codes");
const Annonce = require("../models/annonces");

router.post("/", async (req, res) => {
    const {name, position, phone, mail, marker, sex, title, description} = req.body;
    if (name == null || position == null || phone == null || mail == null || null || marker == null || sex == null || title == null || description == null)
        return res.status(400).send(Consts.standardErrorResponse(ErrorCodes.INVALID_PARAMS));
    let annonce = Annonce.register({name, position, phone, mail, marker, sex, title, description})
    annonce = await annonce.save();
    let r = Consts.newResponse();
    r.annonce = annonce;
    return res.status(200).send(r);
});

module.exports = router;