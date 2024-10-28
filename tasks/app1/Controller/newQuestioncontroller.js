const db = require('../models')

const insertquestion = async (req,res) => {
    try {
        const {questionNumber,questionName} = req.body;
        console.log("name ",questionName)
        const question = await db.newQuestion.create({
           questionNumber : questionNumber,
           questionName : questionName
        });
        res.status(200).send({message:"saved"})
    } catch (error) {
        console.error('Error adding new question:', error);
        res.status(500).send({message:error.message})
    }
};
module.exports = {
    insertquestion
}