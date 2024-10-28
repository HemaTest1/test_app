const express= require('express')
const router = express.Router();
const humanController = require("../controller/humancontroller");


router.post('/savehuman',humanController.inserthuman);


module.exports = router;