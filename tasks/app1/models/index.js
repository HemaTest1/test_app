const { Sequelize, DataTypes } = require('sequelize');
const dbconfig = require('../dbconfig/dbconfig');
const Student = require('./student')
const newQuestion = require('./newQuestion')
const newOptions = require('./newOptions')
const newAnswer = require('./newAnswer')


// const {sequelize ,DataType, Sequelize } = require('sequelize');

const sequelize = new Sequelize(
    dbconfig.DB,
    dbconfig.USER,
    dbconfig.PASSWORD,{
        host : dbconfig.HOST,
        dialect: dbconfig.dialect,
        pool:{
            max : dbconfig.pool.max,
            min : dbconfig.pool.min,
            acquire : dbconfig.pool.acquire,
            idle : dbconfig.pool.idle
        }
    });

  sequelize.authenticate()
  .then(() => {
    console.log('connected to the database');
  })  
  .catch(err => {
    console.log('Error connecting to the data base : ', err);
  });

  const db = {};
  db.Sequelize = Sequelize;
  db.Sequelize = sequelize;
  
  db.Student = require("./student")(sequelize,DataTypes);
   db.newQuestion = require('./newQuestion')(sequelize,DataTypes);
   db.newOptions = require("./newOptions")(sequelize,DataTypes);
   db.newAnswer = require("./newAnswer")(sequelize,DataTypes);

    // One-to-many relationship with options
    db.newQuestion.hasMany(db.newOptions, {
      foreignKey: 'questionNumber',
      as: 'options',
    });
    
    // One-to-one or one-to-many relationship with answers
    db.newQuestion.hasMany(db.newAnswer, {
      foreignKey: 'questionNumber',
      as: 'answers',
    });

 
  

module.exports = db ;