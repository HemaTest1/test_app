const express= require('express')
const newQuestionRouter = express.Router();
const newQuestioncontroller = require("../controller/newQuestionController");
const multer = require('multer');
const upload =multer({dest : 'excel/'});


newQuestionRouter.post('/insertquestion',newQuestioncontroller.insertquestion);
newQuestionRouter.post('/insertquestions',upload.single('file'),newQuestioncontroller.insertquestions);
newQuestionRouter.post('/processExcelQ',upload.single('file'),newQuestioncontroller.processExcelQ);


module.exports = newQuestionRouter;





