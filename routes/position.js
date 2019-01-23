var express = require('express');
var router = express.Router();

var { sequelize } = require("../config/index");

var Position = sequelize.import("../models/position");

// 获取职位
router.all('/getPosition', function(req, res, next) {
    Position.findAll({
        // limit: parseInt(req.query.limit) || 10,
        // offset: parseInt(req.query.offset) || 0
    }).then(function (result) {
        res.json({
            status:1,
            data: result,
        }).catch(next);
    });
});

module.exports = router;
