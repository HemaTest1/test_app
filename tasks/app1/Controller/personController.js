const { Model } = require('sequelize');
const db = require("../models");

const saveperson = async (req, res) => {
    try {
        const { name, age, password, location, salary, Dept } = req.body;

        // Basic validation for required fields
        if (!name || !age || !password || !location || !salary || !Dept) {
            return res.status(400).send({ message: "All fields are required." });
        }

        // Create a new employee record in the database
        const person = await db.person.create({
            name,
            age,
            password,
            location,
            salary,
            Dept
        });

        // Send success response with the saved employee details
        res.status(200).send({ message: "Saved successfully", person });
    } catch (error) {
        console.error("Error saving person:", error);
        res.status(500).send({ message: "Not saved", error: error.message });
    }
};

module.exports = {
    saveperson,
}