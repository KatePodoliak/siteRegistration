const {models} = require('../db');

module.exports.index = (req, res) => {
    res.render('pages/index');
};