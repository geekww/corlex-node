var express = require('express');
var router = express.Router();

var { sequelize } = require("../config/index");

var User = sequelize.import("../models/user");

// 获取所有用户
router.all('/getUser', function(req, res, next) {
    User.getUsers({
        // limit: parseInt(req.query.limit) || 10, //默认查询10条
        // offset: parseInt(req.query.offset) || 0 //默认查询第一页
    }).then(function(result) {
        res.json({
            status: 1,
            data: result
        });
    }).catch(next);
});

router.post('/addUser', function(req, res, next) {
    var Message = {
        name: req.body.name,
        sex: req.body.sex,
        uid: req.body.uid,
        tel: req.body.tel,
        email: req.body.email,
        position: req.body.position,
    };
    // //创建一条记录,创建成功后跳转回首页
    User.create(Message);
});

module.exports = router;
