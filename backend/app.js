const express = require('express');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');
const specs = swaggerJsDoc({
    definition: {
        openapi: "3.0.1",
        info: {
            title: "Gougal REST API Documentation",
            version: "0.1.0",
        }
    },
    apis: ["./models/*.js", "./routes/*.js"]
});
const mongoose = require('mongoose');

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: false}));

const {MONGODB_URL} = require('./src/config/consts');
const usersRouter = require("./src/routes/user");
mongoose.connect(MONGODB_URL).then(function () {
    console.log("connected to database");

    const usersRouter = require("./src/routes/user");
    const annoncesRouter = require("./src/routes/annonces");
    const servicesRouter = require("./src/routes/services");

    app.use("/", usersRouter);
    app.use("/annonces", annoncesRouter);
    app.use("/services", servicesRouter);
    app.use('/swagger', swaggerUi.serve, swaggerUi.setup(specs));
});

module.exports = app;
