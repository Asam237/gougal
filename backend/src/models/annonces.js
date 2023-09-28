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
 *                 approve:
 *                     type: boolean
 */
const Annonce = mongoose.model(
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
        description: {type: String},
        approve: {type: Boolean},
    }, {
        statics: {
            register(input) {
                return new Annonce(input);
            },
            getOne(query) {
                return Annonce.findOne(query);
            },
            findPaginated(query, page, size) {
                return Annonce.find(query).skip(page * size)
                    .limit(size);
            }
        }
    })
);

module.exports = Annonce;