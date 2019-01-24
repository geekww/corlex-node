var express = require('express');
var router = express.Router();

var { sequelize } = require("../config/index");

var Group = sequelize.import("../models/group");

// 获取组别
router.all('/getGroup', function(req, res, next) {
    Group.findAll({

    }).then(function(result) {
        res.json({
            status: 1,
            data: result
        });
    }).catch(next);
});

// 增加组别
router.post('/addGroup', function(req, res, next) {
    var Message = {
        group: req.body.group,
        gid: req.body.gid,
    };
    // 创建记录
    Group.create(Message).then(function () {
        res.json({
            status: 1,
            msg: '创建成功'
        });
    }).catch(next);
});

module.exports = router;
