const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    const human = sequelize.define('human', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        age: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    }, {
        tableName: 'humans', // table name in the database
        timestamps: false, // if you don't want createdAt and updatedAt fields
    });

    return human;
};
