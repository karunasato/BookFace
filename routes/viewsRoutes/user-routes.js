const express = require("express");
const passport = require("../../config/passport");
const db = require("../../src/models")
const router = express.Router();

router.post("/signup", (req,res)=> {
    db.User.create(req.body)
    .then(userData=> console.log(userData))
})

router.post("/login", passport.authenticate("local"), (req,res)=> {

})
module.exports = router;
