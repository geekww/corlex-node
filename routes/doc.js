var express = require('express');
var router = express.Router();

var { sequelize } = require("../config/index");

var Doc = sequelize.import("../models/doc");

//
// router.all('/getTask', function(req, res, next) {
//     Task.getTasksByPid(req.body.pid).then(function(result) {
//         res.json({
//             status: 1,
//             data: result
//         });
//     }).catch(next);
// });

router.post('/saveDoc', function(req, res, next) {
    var Message = {
        title: req.body.title,
        markdown: req.body.markdown,
        text: req.body.text,
        author: req.body.author,
        date: req.body.date,
    };
    Doc.create(Message).then(function () {
        res.json({
            status: 1,
            msg: '创建成功'
        });
    }).catch(next);
});

module.exports = router;
