module.exports = function(app) {
    app.use('/corlex/',require('./init.js'));
    app.use('/corlex/user',require('./user.js'));
    app.use('/corlex/position',require('./position.js'));
    app.use('/corlex/project',require('./project.js'));
    app.use('/corlex/task',require('./task.js'));
    app.use('/corlex/doc',require('./doc.js'));
};
