const express = require('express')
const {user_get_one} = require('../controlers/users')

const router = express.Router()

router.get('/one',user_get_one)

module.exports = router