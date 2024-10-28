const { DataTypes } = require('sequelize')

// module.exports = (Sequelize.DataType) => {
//           Sequelize.define("student",{
    
//     id: {
//         type: DataTypes.INTEGER,
//         autoIncrement: true,
//         primaryKey: true,
//     },
//     name: {
//         type: DataTypes.STRING,
//         allowNull: false,
//     },
//     email: {
//         type: DataTypes.STRING,
//         allowNull: false,
//         unique: true,
//     },
//     age: {
//         type: DataTypes.INTEGER,
//         allowNull: false,
//     },

// {
//     tableName: 'students', // table name in the database
//     timestamps: false, // if you don't want createdAt and updatedAt fields

    
// }
//  return Student;
// });


module.exports = (sequelize)=>{
   const Student = sequelize.define('Student', {
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
        
    },
    {
        tableName: 'students', // table name in the database
        timestamps: false, // if you don't want createdAt and updatedAt fields
    }
)
return Student;
}