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
 */
const Service = mongoose.model(
    "services",
    new mongoose.Schema({
        ...Model.base,
        name: {type: String},
        position: {type: String},
        phone: {type: String},
        mail: {type: String},
        marker: {type: String},
        approve: {type: Boolean}
    }, {
        statics: {
            register(input) {
                return new Service(input);
            },
            findPaginated(query, page, size) {
                return Service.find(query)
                    .skip(page * size)
                    .limit(size);
            },
            getOne(query) {
                return Service.findOne(query);
            }
        }
    })
);

module.exports = Service;