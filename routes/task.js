var express = require('express');
var router = express.Router();

var { sequelize } = require("../config/index");

var Task = sequelize.import("../models/task");

// 获取项目
router.all('/getTask', function(req, res, next) {
    Task.getTasksByPid(req.body.pid).then(function(result) {
        res.json({
            status: 1,
            data: result
        });
    }).catch(next);
});

router.post('/addTask', function(req, res, next) {
    var Message = {
        name: req.body.name,
        pid: req.body.pid,
        creator: req.body.creator,
        manager: req.body.manager,
        date: req.body.date,
        plane: req.body.plane,
        finish: req.body.finish,
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
