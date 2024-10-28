const express = require('express');
const cors = require("cors");
const db = require('./models');


const app = express();
const PORT = 3000;


app.use(express.json());
app.use(cors());


const newquestionroutes = require('./Routes/newQuestionRoutes');
const personroutes = require('./Routes/personRoutes');

app.use("/api/question",newquestionroutes);
app.use("/person",personroutes)

  
(async () => {
    try{
        await db.Sequelize.sync({force: false});
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
      }
      catch(error){
        console.log('Error synchronizing database :' ,error);
      }

})();  