// External Dependancies
const mongoose = require("mongoose")
const ObjectId = mongoose.Schema.Types.ObjectId

const songSchema = new mongoose.Schema({
  title: String,
  gender: String,
  price: Number,
  age: Number,
  album_id: ObjectId
})

module.exports = mongoose.model("Song", songSchema)