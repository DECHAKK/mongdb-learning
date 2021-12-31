const express = require('express');
const router = express.Router();
const { CreateRegister,Login} = require('../controllors/authentcontrol')



router.post('/register',CreateRegister)

router.get('/login',Login);
    

module.exports = router;