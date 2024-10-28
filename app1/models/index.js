const { Sequelize, DataTypes } = require('sequelize');
const dbconfig = require('../dbConfig/dbconfig');

// Set up Sequelize connection
const sequelize = new Sequelize(
  dbconfig.DB,
  dbconfig.USER,
  dbconfig.PASSWORD,
  {
    host: dbconfig.HOST,
    dialect: dbconfig.dialect,
    pool: {
      max: dbconfig.pool.max,
      min: dbconfig.pool.min,
      idle: dbconfig.pool.idle,
    },
  }
);

// Authenticate the database connection
sequelize.authenticate()
  .then(() => {
    console.log(`Connected to the server`);
  })
  .catch((err) => {
    console.log(`Error connecting to the server:`, err);
  });

// Define the db object to store Sequelize models
const db = {};
db.Sequelize = sequelize;
db.Sequelize = sequelize; // Use sequelize for the connection

// Import models
db.human = require('./human')(sequelize, DataTypes);
db.newQuestion = require('./newQuestion')(sequelize, DataTypes);
db.question = require('./question')(sequelize, DataTypes);
db.option = require('./option')(sequelize, DataTypes);
db.answer = require('./answer')(sequelize, DataTypes);
db.subject = require('./subject')(sequelize,DataTypes);
db.topic = require('./topic')(sequelize,DataTypes);

// Define associations
// One-to-many relationship between Question and Option
db.question.hasMany (db.option, {
  foreignKey: 'question_id',
  as: 'options',
});

// One-to-many relationship between Question and Answer
db.question.hasMany(db.answer, {
  foreignKey: 'question_id', // This should be question_id, not answer_id
  as: 'answers',
});


  db.option.hasMany(db.answer, {
      foreignKey: 'option_id',
      as: 'answers'
  });

  db.subject.hasMany(db.topic, {
      foreignKey: 'subject_id',
      as: 'topics'
  });
    
  // db.subject.hasMany(db.topic,{
  //     foreignKey: 'subject_id',
  //     as: 'subjects'

  // })



  db.topic.hasMany(db.question, {
    foreignKey: 'question_id',
    as: 'topics',
    
});

db.question.belongsTo(db.topic, {
    foreignKey: 'topic_id',
    as: 'questions' // Unique alias for the association
});


module.exports = db;
