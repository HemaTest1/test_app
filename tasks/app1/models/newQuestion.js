const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
const newQuestion = sequelize.define('newQuestion', {
    questionNumber: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
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
