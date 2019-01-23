module.exports = function(sequelize, DataTypes) {
    return sequelize.define("doc_article", {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false, //非空
            autoIncrement: true, //自动递增
            primaryKey: true //主键
        },
        title: {
            type: DataTypes.STRING(50),
            allowNull: true
        },
        markdown: {
            type: DataTypes.STRING(),
            allowNull: true
        },
        text: {
            type: DataTypes.STRING(),
            allowNull: true
        },
        author: {
            type: DataTypes.STRING(10),
            allowNull: true
        },
        date: {
            type: DataTypes.STRING(30),
            allowNull: true
        },
    }, {
        underscored: true, //额外字段以下划线来分割
        timestamps: false, //取消默认生成的createdAt、updatedAt字段
        freezeTableName: true, // Model 对应的表名将与model名相同
        //静态方法，即user模型自带的方法
        classMethods: classMethods,
        comment: "用户信息类",
    });
};

//静态方法
const classMethods = {
    //根据pid查询任务
    getTasksByPid: function(id) {
        return this.findAll({
            where: {
                pid: id
            }
        });
    },
    //获取所有
    getAllTasks: function(options) {
        return this.findAll(options);
    },
    //根据id更新数据
    updateUserById: function(values, id) {
        return this.update(values, {
            where: {
                id: id
            }
        });
    },
    //根据id删除数据
    deleteById: function(id) {
        return this.destroy({
            where: {
                id: id
            }
        })
    }
}