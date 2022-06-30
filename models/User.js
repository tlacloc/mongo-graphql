// External Dependancies
const mongoose = require('mongoose')

const ownerSchema = new mongoose.Schema({
	firstName: String,
	lastName: String,
	email: String,
    tokens: [Number]


})

module.exports = mongoose.model('User', ownerSchema)