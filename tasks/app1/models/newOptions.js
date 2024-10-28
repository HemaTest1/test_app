const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    const newOptions = sequelize.define('newOptions', {
      option1: {
        type: DataTypes.STRING,
        allowNull:false
      },
      option2: {
        type: DataTypes.STRING,
        allowNull: false
      },
      option3: {
        type: DataTypes.STRING,
        allowNull: false
      }
    }, {
      tableName: 'options',
      timestamps: false
    });
  
    return newOptions;
  };
  