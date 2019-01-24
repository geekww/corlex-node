// var Sequelize = require('sequelize');
// var sequelize = new Sequelize(
//     'corlex',    //数据库名
//     'rdsroot',             //用户名
//     '123456',             //密码
//     {
//         'dialect': 'mysql',
//         'host': '180.76.145.42',
//         'port': 3306
//     }
// );
//
// //定义表的模型
// var User = sequelize.define('ur_user', {
//     id:{ //自增长id,主键,整形
//         type:Sequelize.INTEGER,
//         allowNull: false, //非空
//         primaryKey: true, //主键
//         autoIncrement:true //自动递增
//     },
//     name: { //用户名
//         type: Sequelize.STRING(30)
//     },
//     sex: { //性别（0：男，1：女）
//         type: Sequelize.STRING(5)
//     },
//     uid: { //工号
//         type: Sequelize.STRING(10)
//     },
//     tel: { //联系方式
//         type: Sequelize.STRING(10)
//     },
//     email: { //邮箱
//         type: Sequelize.STRING(10)
//     },
//     position: { //职位
//         type: Sequelize.STRING(10)
//     },
// });
// User.sync(); //创建表
//
// module.exports = User;
/*
 * 用户类
 */
module.exports = function(sequelize, DataTypes) {
    return sequelize.define("ur_users", {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false, //非空
            autoIncrement: true, //自动递增
            primaryKey: true //主键
        },
        name: {
            type: DataTypes.STRING(20),
            allowNull: false
        },
        sex: {
            type: DataTypes.STRING(5),
            allowNull: false
        },
        uid: {
            type: DataTypes.STRING(10),
            allowNull: false
        },
        tel: {
            type: DataTypes.STRING(30),
            allowNull: false
        },
        email: {
            type: DataTypes.STRING(20),
            allowNull: false
        },
        position: {
            type: DataTypes.STRING(5),
            allowNull: false
        },
    }, {
        underscored: true, //额外字段以下划线来分割
        // createdAt: "created_at",
        // updatedAt: "updated_at",
        timestamps: false, //取消默认生成的createdAt、updatedAt字段
        freezeTableName: true, // Model 对应的表名将与model名相同
        //静态方法，即user模型自带的方法
        classMethods: classMethods,
        comment: "用户信息类",
        // paranoid: true      //虚拟删除
        //实例方法
        // instanceMethods: instanceMethods
    });
};

//静态方法
const classMethods = {
    //根据id查询
    getUserById: function(id) {
        return this.findById(id);
    },
    //获取所有
    getUsers: function(options) {
        return this.findAll(options);
    },
    //根据uid更新数据
    updateUserByUid: function(values, id) {
        return this.update(values, {
            where: {
                uid: id
            }
        });
    },
    //根据uid删除数据
    deleteByUid: function(id) {
        return this.destroy({
            where: {
                uid: id
            }
        })
    }
}