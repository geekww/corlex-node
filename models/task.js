module.exports = function(sequelize, DataTypes) {
    return sequelize.define("pr_task", {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false, //非空
            autoIncrement: true, //自动递增
            primaryKey: true //主键
        },
        name: {
            type: DataTypes.STRING(500),
            allowNull: false
        },
        pid: {
            type: DataTypes.STRING(10),
            allowNull: false
        },
        creator: {
            type: DataTypes.STRING(10),
            allowNull: false
        },
        manager: {
            type: DataTypes.STRING(10),
            allowNull: false
        },
        date: {
            type: DataTypes.STRING(30),
            allowNull: false
        },
        plane: {
            type: DataTypes.STRING(30),
            allowNull: false
        },
        finish: {
            type: DataTypes.STRING(30),
            defaultValue: "未开始"
        },
        state: {
            type: DataTypes.STRING(30),
            defaultValue: "1"
        },
        remark: {
            type: DataTypes.STRING(1000),
            allowNull: false
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