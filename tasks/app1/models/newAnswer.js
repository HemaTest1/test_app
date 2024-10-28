const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    const newAnswer = sequelize.define('newAnswer', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      correctAnswer: {
        type: DataTypes.STRING,
        allowNull: false
      }
     
    }, {
      tableName: 'answers',
      timestamps: false
    });
  
    return newAnswer;
  };
  