const mongoose = require("mongoose");

module.exports = mongoose.model("Profile", {

  name: String,
  skills: [String],

  projects: [{
    title:String
  }]
});
