const express = require('express')
const {users_get_one,users_create} = require('../controllers/users')

const router = express.Router()

router.get('/one',users_get_one)

router.post('/create',users_create)

module.exports = router