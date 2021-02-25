const express = require('express');
const controller = require('../controllers/auth');
const {check} = require("express-validator");
const router = express.Router();

router.get("/login", controller.login);

router.get("/reg", controller.reg);

router.post("/reg", [
    check("login", "")
        .trim()
        .notEmpty()
        .matches(/^[a-zA-Z][a-zA-Z0-9-_\.]$/,)
    ],
    controller.registerAjax);

module.exports = router;