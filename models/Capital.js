const Sequelize = require('sequelize')
const db = require("../utils/db")

const Capital = db.define('capital', {
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
        unique: true
    },
    title:{
        type: Sequelize.TEXT,
        allowNull: false
    },
    description:{
        type: Sequelize.TEXT,
        allowNull: true
    },
    amountValue:{
        type: Sequelize.DECIMAL,
        allowNull: false
    },
    amountCurrency:{
        type: Sequelize.TEXT,
        allowNull: false
    },
    date:{
        type: Sequelize.DATE,
        allowNull: false
    }
})

module.exports = Capital