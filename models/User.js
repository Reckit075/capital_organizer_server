const Sequelize = require('sequelize')
const db = require("../utils/db")

const User = db.define('user', {
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
        unique: true
    },
    login:{
        type: Sequelize.TEXT,
        allowNull: false
    },
    password:{
        type: Sequelize.TEXT,
        allowNull: false
    },
    name:{
        type: Sequelize.TEXT,
        allowNull: true
    }
})

module.exports = User