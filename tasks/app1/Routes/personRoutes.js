const express = require('express')
const personrouter = express.Router();
const personcontroller = require("../Controller/personController")

personrouter.post("/insertperson",personcontroller.saveperson)

module.exports = personrouter;