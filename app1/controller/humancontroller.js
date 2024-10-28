
const { Model } = require('sequelize');
const db = require('../models')

const inserthuman = async (req,res) => {
    try {
        const {name,email,age} = req.body;
        console.log("name ",name)
        const human = await db.human.create({
            name,
            email: email,
            age: age,
        });
        res.status(200).send({message:"saved"})
    } catch (error) {
        console.error('Error adding human:', error);
        res.status(500).send({message:error.message})
    }
};

module.exports = {
    inserthuman,
};
