const express= require('express')
const questionRouter = express.Router();
const questioncontroller = require("../controller/questioncontroller");
const multer = require('multer');
const upload =multer({dest : 'excel/'});




questionRouter.post('/ExcelQ',upload.single('file'),questioncontroller.ExcelQ);
questionRouter.get('/getQuestionsByTopic/:id',questioncontroller.getQuestionsByTopic);


module.exports = questionRouter;





