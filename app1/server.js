const express = require('express');
const db = require('./models');

const cors = require('cors');

const app = express();
const PORT = 3000;
app.use(express.json());
app.use(cors());

// const humanroutes = require('./Routes/humanRoutes');
// const newQuestionroutes = require('./Routes/newQuestionRoutes');
// const questionroutes = require('./Routes/questionRoutes')

const optionroutes = require('./Routes/optionRoutes')
const answerroutes = require('./Routes/answerRoutes')
const uploadexcelroutes = require('./Routes/uploadexcelRoutes');
const quizroutes = require('./Routes/quizeRoutes');
const topicroutes = require('./Routes/topicRoutes');
const subjectroutes = require('./Routes/subjectRoutes');

// Use the routes
// app.use("/api/human", humanroutes);
// app.use("/api/newQuestion",newQuestionroutes);
// app.use('/excelq',questionroutes);
app.use('/option',optionroutes);
app.use('/answer',answerroutes);
app.use('/upload',uploadexcelroutes);
app.use('/api',quizroutes);
app.use('/subject',subjectroutes);
app.use('/topic',topicroutes);



(async () => {
    try {
        await db.Sequelize.sync({ force: false });
        app.listen(PORT, () => {
            console.log(`Server is running on ${PORT}`);
        });
    } catch (error) {
        console.log('Error synchronizing database :' + error);
    }
})();
