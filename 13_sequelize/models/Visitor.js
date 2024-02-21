const Visitor = function(Sequelize, DataTypes) {
    // Sequelize : /model/index.js의 sequelize
    // Datatypes : /model/index.js의 Sequelize
    
    // Sequelize.define(parameter1,parameter2,parameter3)
    // parameter1: 모델 이름 설정
    // parameter2: 컬럼 정의(제약 조건 설정)
    // parameter3: 모델 옵션 설정
    const model = Sequelize.define("Visitor",{
        id:{
            "type":DataTypes.integer,
            primaryKey:true,
            autoIncrement:true,
            allowNull:false
        }, name: {
            type:DataTypes.String(10),
            allowNull:false,
        }, comment: {
            type:DataTypes.TEXT1("medium"),
        }
    },{
        tableName:"visitor",
        timestamps:false,
        freezeTableName:true,
    })
}