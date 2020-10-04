const router = require("express").Router();

//the HTML routes here render hbs pages when routes are hit

router.get("/books", (req,res)=> {
    res.render("books")
}) 

router.get("/books/show", (req,res)=> {
    res.render("showBooks")
}) 


router.get("/videos", (req,res)=> {
    res.render("videos")
})

router.get("/videos/show", (req,res)=> {
    res.render("showVideos")
})
router.get("/subjects", (req,res)=> {
    res.render("subjects")
})
router.get("/subjects/show", (req,res)=> {
    res.render("showSubjects")
})

router.get("/signup", (req,res)=> {
    res.render("signup")
})

router.get("*", (req,res)=> res.render("landing"))


module.exports = router;