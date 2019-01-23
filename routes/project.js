var express = require('express');
var router = express.Router();

var { sequelize } = require("../config/index");

var Project = sequelize.import("../models/project");

// 获取项目
router.all('/getProject', function(req, res, next) {
    Project.getProjects({
        // limit: parseInt(req.query.limit) || 10, //默认查询10条
        // offset: parseInt(req.query.offset) || 0 //默认查询第一页
    }).then(function(result) {
        res.json({
            status: 1,
            data: result
        });
    }).catch(next);
});

router.post('/addProject', function(req, res, next) {
    var Message = {
        name: req.body.name,
        pid: req.body.pid,
        manager: req.body.manager,
        date: req.body.date,
        remark: req.body.remark,
    };
    Project.create(Message).then(function () {
        res.json({
            status: 1,
            msg: '创建成功'
        });
    }).catch(next);
});

module.exports = router;
