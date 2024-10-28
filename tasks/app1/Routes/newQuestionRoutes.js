const express= require('express')
const newquestionrouter = express.Router();
const newquestioncontroller = require("../Controller/newQuestioncontroller");

newquestionrouter.post('/insertquestion',newquestioncontroller.insertquestion);


module.exports = newquestionrouter;