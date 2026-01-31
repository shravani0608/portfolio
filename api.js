const router = require("express").Router();

const Profile = require("../models/profile");
const Contact = require("../models/contact");


// Get portfolio
router.get("/profile", async (req,res)=>{

  const data = await Profile.findOne();

  res.json(data);
});


// Contact
router.post("/contact", async (req,res)=>{

  await Contact.create(req.body);

  res.send("Saved");
});

module.exports = router;
