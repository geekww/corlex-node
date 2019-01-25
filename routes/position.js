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

// 创建职位
router.post('/addPosition', function(req, res, next) {
    var Message = {
        position: req.body.position,
    };
    // 创建记录
    Position.create(Message).then(function () {
        res.json({
            status: 1,
            msg: '创建成功'
        });
    }).catch(next);
});

// 删除职位
router.post('/delPosition', function(req, res, next) {
    Position.deleteByPid(req.body.pid).then(function(result) {
        res.json({
            status: 1,
            msg: '已删除'
        });
    }).catch(next);
});

module.exports = router;
