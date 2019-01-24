var express = require('express');
var router = express.Router();

var { sequelize } = require("../config/index");

var User = sequelize.import("../models/user");
var Position = sequelize.import("../models/position");

// 获取所有用户
router.all('/getUser', function(req, res, next) {
    User.findAll({
        include: {
            model: Position, // 关联查询
            as: 'info' // 别名
            // where: {} // userInfo的查询条件
        }
    }).then(function(result) {
        res.json({
            status: 1,
            data: result
        });
    }).catch(next);
});

// 增加用户
router.post('/addUser', function(req, res, next) {
    // 判断工号是否存在
    User.findAll({
        where:{
            uid:req.body.uid
        }
    }).then(function (result) {
        if(result.length >0){
            res.json({
                status: 0,
                msg: '工号已存在'
            });
        }else {
            let Message = {
                name: req.body.name,
                sex: req.body.sex,
                uid: req.body.uid,
                tel: req.body.tel,
                email: req.body.email,
                position: req.body.position,
            };
            // 创建记录
            User.create(Message).then(function () {
                res.json({
                    status: 1,
                    msg: '创建成功'
                });
            }).catch(next);
        }
    });

});

// 删除用户
router.post('/delUser', function(req, res, next) {
    User.deleteByUid(req.body.uid).then(function(result) {
        res.json({
            status: 1,
            msg: '已删除'
        });
    }).catch(next);
});

// 更新用户信息
router.post('/updateUser', function(req, res, next) {
    User.updateUserByUid(req.body,req.body.uid).then(function(result) {
        res.json({
            status: 1,
            msg: '更新成功'
        });
    }).catch(next);
});

module.exports = router;
