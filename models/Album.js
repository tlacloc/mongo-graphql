// External Dependancies
const mongoose = require("mongoose")
const ObjectId = mongoose.Schema.Types.ObjectId

const albumSchema = new mongoose.Schema({
  creator_id: ObjectId,
  name: String,
  date: String,
  gender: String

})

module.exports = mongoose.model("Service", albumSchema)
