  
const express = require('express')
const {user_get_one} = require('../controlers/users')

const router = express.Router()

router.get('/:id',user_get_one)
// router.get('/',user_get_one)

module.exports = router