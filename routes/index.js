module.exports = function(app) {
    // 初始化
    // app.use('/corlex/',require('./init.js'));
    // 用户
    app.use('/corlex/user',require('./user.js'));
    // 项目
    app.use('/corlex/project',require('./project.js'));
    // 任务
    app.use('/corlex/task',require('./task.js'));
    // 文档
    app.use('/corlex/doc',require('./doc.js'));
    // 团队
    app.use('/corlex/position',require('./position.js'));
    app.use('/corlex/group',require('./group.js'));
};
