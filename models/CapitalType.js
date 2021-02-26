const Sequelize = require('sequelize')
const db = require("../utils/db")

const CapitalType = db.define('capitalType', {
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
        unique: true
    },
    name:{
        type: Sequelize.TEXT,
        allowNull: true
    }
})

module.exports = CapitalType