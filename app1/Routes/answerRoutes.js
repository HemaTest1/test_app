const express= require('express')
const answerRouter = express.Router();
const answercontroller = require("../controller/answercontroller");
const multer = require('multer');
const upload =multer({dest : 'excel/'});




answerRouter.post('/ExcelA',upload.single('file'),answercontroller.ExcelA);
answerRouter.get('/correctanswer/:questionId',answercontroller.corectanswer);


module.exports = answerRouter;





