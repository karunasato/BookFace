const router = require("express").Router();

//the HTML routes here render hbs pages when routes are hit

router.get("/books", (req,res)=> {
    res.render("books")
}) 

router.get("/videos", (req,res)=> {
    res.render("videos")
})
router.get("/subjects", (req,res)=> {
    res.render("subjects")
})

router.get("/signup", (req,res)=> {
    res.render("signup")
})

router.get("*", (req,res)=> res.render("landing"))


module.exports = router;