var express = require('express');
var router = express.Router();

var { sequelize } = require("../config");

var User = sequelize.import("../models/user");
var Position = sequelize.import("../models/position");
var Init = sequelize.import("../models/init");

// 获取初始化数据
router.all('/getInitData', function(req, res, next) {
    Init.getPosition({
        limit: parseInt(req.query.limit) || 10, //默认查询10条
        offset: parseInt(req.query.offset) || 0 //默认查询第一页
    }).then(function(result) {
        res.json({
            status: 1,
            positionItem: result
        });
    }).catch(next);
});

module.exports = router;
