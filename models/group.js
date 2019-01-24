module.exports = function(sequelize, DataTypes) {
    return sequelize.define("tem_group", {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false, //非空
            autoIncrement: true, //自动递增
            primaryKey: true //主键
        },
        group: {
            type: DataTypes.STRING(20),
            allowNull: false
        },
        gid: {
            type: DataTypes.STRING(5),
            allowNull: false
        },
    }, {
        underscored: true,
        timestamps: false,
        freezeTableName: true,
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
    getPosition: function(options) {
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