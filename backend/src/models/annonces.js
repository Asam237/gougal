const Model = require("./model");
const mongoose = require("mongoose");


/**
 * @swagger
 * components:
 *     schemas:
 *         Annonce:
 *             type: object
 *             properties:
 *                 name:
 *                     type: string
 *                 position:
 *                     type: string
 *                 phone:
 *                     type: string
 *                 mail:
 *                     type: string
 *                 marker:
 *                     type: string
 *                 sex:
 *                     type: string
 *                 title:
 *                     type: string
 *                 description:
 *                     type: string
 */
const Annonce = mongoose.models(
    "annonces",
    new mongoose.Schema({
        ...Model.base,
        name: {type: String},
        position: {type: String},
        phone: {type: String},
        mail: {type: String},
        marker: {type: String},
        sex: {type: String, enum: ["M", "S"]},
        title: {type: String},
        description: {type: String}
    })
);

module.exports = Annonce;