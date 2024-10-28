const { DataTypes } = require('sequelize');
const sequelize = require('../dbConfig/dbconfig');


module.exports = (sequelize) => {
const newQuestion = sequelize.define('newQuestion', {
    
    questionNumber: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    questionName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    tableName: 'questions',
    timestamps: false,
});
  return newQuestion;
}
