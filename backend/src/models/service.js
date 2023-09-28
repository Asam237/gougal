const Model = require("./model");
const mongoose = require("mongoose");

/**
 * @swagger
 * components:
 *     schemas:
 *         Service:
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
 */
const Service = mongoose.models(
    "services",
    new mongoose.Schema({
        ...Model.base,
        name: {type: String},
        position: {type: String},
        phone: {type: String},
        mail: {type: String},
        marker: {type: String},
        sex: {type: String, enum: ["M", "S"]},
    })
);

module.exports = Service;