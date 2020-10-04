// Requiring necessary npm packages
const express = require("express");
const bodyParser = require("body-parser");
const exphbs = require("express-handlebars");
// ROUTES
const subjectsAPIRouter = require("./routes/api/subjects-apis");
const subjectsViewRouter = require("./routes/views/subjects-views");

require("dotenv").config();

// Setting up port and requiring models for syncing
const PORT = process.env.PORT || 8080;

var myGlobals = {
  user: function (ctx) {
    console.log(ctx.data.exphbs.helpers);
    return "hey";
  },
};

// Creating express app and configuring middleware needed for authentication
const app = express();

/* BODY PARSER */
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

// Set viewengine
app.engine(
  ".hbs",
  exphbs({
    extname: ".hbs",
    helpers: myGlobals,
  })
);

app.set("view engine", ".hbs");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// API ROUTER
app.use("/api/subjects", subjectsAPIRouter);

// VIEWS ROUTER
app.use("/subjects", subjectsViewRouter);
app.use("/", (req, res) => res.render("landing"));

// require("./src/bootstrap")();
app.listen(PORT, () => {
  console.log("Server Running on port ", PORT);
});
