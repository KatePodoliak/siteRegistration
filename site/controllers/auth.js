const bcrypt = require('bcrypt');
const { validationResult } = require('express-validator');

const {models} = require('../db');

module.exports.login = function (req, res){
    res.render('pages/auth/login');
};

module.exports.reg = async function (req, res) {
    res.render('pages/auth/reg');
};

module.exports.registerAjax = async (req, res) => {
    try {
        await models.user.create({
            login: req.body.login,
            email: req.body.email,
            password: await bcrypt.hash(req.body.password, 10)
        })
        res.send.status(200);
    }
    catch {
        res.send.status(404);
    }
}