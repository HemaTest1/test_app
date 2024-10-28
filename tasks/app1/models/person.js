const {DataTypes}  = require('sequelize');

module.exports = (sequelize) =>{
    const person = sequelize.define('person', {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        name: {
          type: DataTypes.STRING,
          allowNull: false
        },
        age: {
            type : DataTypes.STRING,
            allowNull: false
        },
     salary: {
        type: DataTypes.INTEGER,
        allowNull:false,
        primaryKey : true,
        
     },
     password :{
        type:DataTypes.STRING,
        allowNull: false,
        primaryKey:true
     },
      Dept : {
        type:DataTypes.STRING,
        allowNull: false
      },
      location:{
       type:DataTypes.STRING,
       allowNull:false
      }
      },
      {
        tableName: 'persson', // Optional: specify the table name
         timestamps: false,
      });
    return person;
};