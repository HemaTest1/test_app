// const { Sequelize, DataTypes } = require('sequelize');
// const sequelize = new Sequelize('database', 'username', 'password', {
//     host: 'localhost',
//     dialect: 'mysql' // or 'postgres', 'sqlite', etc.
// });

// // Define a User model
// const User = sequelize.define('User', {
//     username: {
//         type: DataTypes.STRING,
//         allowNull: false
//     },
//     email: {
//         type: DataTypes.STRING,
//         allowNull: false,
//         unique: true
//     }
// });

// // Sync the model with the database
// sequelize.sync()
//     .then(() => {
//         console.log('User model synced with the database');
//     })
//     .catch(error => console.error('Error syncing model:', error));

// // Create a new user
// User.create({ username: 'JohnDoe', email: 'john@example.com' })
//     .then(user => console.log('User created:', user))
//     .catch(error => console.error('Error creating user:', error));
