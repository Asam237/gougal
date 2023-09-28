const express = require("express");
const router = express.Router();
const Service = require("../models/service");
const Consts = require("../config/consts");
const ErrorCodes = require("../config/error_codes");

router.post("/", async (req, res) => {
    const {name, position, phone, mail, marker, sex, approve} = req.body;
    if (name == null || position == null || phone == null || mail == null || null || marker == null || sex == null)
        return res.status(400).send(Consts.standardErrorResponse(ErrorCodes.INVALID_PARAMS));
    let service = Service.register({name, position, phone, mail, marker, sex, approve: false});
    service = await service.save();
    let r = Consts.newResponse();
    r.service = service;
    return res.status(200).send(r);
});

router.get("/", (req, res) => {
    let page = req.query.page ? Number.parseInt(req.query.page) : 0;
    let size = req.query.size ? Number.parseInt(req.query.size) : 20;
    Service.findPaginated({}, page, size).then(async (services) => {
        let total = await Service.count({});
        let r = Consts.newResponse();
        r.service = {
            "size": Math.min(size, total),
            "total": total,
            "page": page,
            "content": services
        };
        return res.status(200).send(r);
    }, (err) => Consts.errorFallback(err, res));
});

router.get("/:service", (req, res) => {
    let serviceId = req.params.service;
    Service.getOne({_id: serviceId}).then(async (service) => {
        if (service == null)
            return res.status(400).send(Consts.standardErrorResponse(ErrorCodes.INVALID_PARAMS));
        let r = Consts.newResponse();
        r.service = service;
        return res.status(200).send(r);
    }, (err) => Consts.errorFallback(err, res));
});

router.put("/:service", (req, res) => {
    let serviceId = req.params.service;
    Service.getOne({_id: serviceId}).then(async (service) => {
        if (service == null)
            return res.status(400).send(Consts.standardErrorResponse(ErrorCodes.INVALID_PARAMS));
        service.approve = true;
        service = await service.save();
        let r = Consts.newResponse();
        r.service = service;
        return res.status(200).send(r);
    }, (err) => Consts.errorFallback(err, res));
});

module.exports = router;