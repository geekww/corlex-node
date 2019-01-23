module.exports = function(sequelize, DataTypes) {
    return sequelize.define("pr_projects", {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false, //非空
            autoIncrement: true, //自动递增
            primaryKey: true //主键
        },
        name: {
            type: DataTypes.STRING(50),
            allowNull: false
        },
        pid: {
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
    //根据id查询
    getUserById: function(id) {
        return this.findById(id);
    },
    //获取所有
    getProjects: function(options) {
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