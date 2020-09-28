// Requiring necessary npm packages
const express = require("express");
const session = require("express-session");

// ROUTES
const userRoutes = require("./routes/user-routes");
const subjectRoutes = require("./routes/subjects-routes");
const bookRoutes = require("./routes/books-routes");
const videoRoutes = require("./routes/videos-routes");

const exphbs = require("express-handlebars");

// Setting up port and requiring models for syncing
const PORT = process.env.PORT || 8080;
// const db = require("./models");

// Creating express app and configuring middleware needed for authentication
const app = express();

// Set viewengine
app.engine(".hbs", exphbs({ extname: ".hbs" }));
app.set("view engine", ".hbs");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
// We need to use sessions to keep track of our user's login status
// Requiring our routes

app.use("/user", userRoutes);
app.use("/subjects", subjectRoutes);
app.use("/books", bookRoutes);
app.use("/videos", videoRoutes);

app.listen(PORT, () => {
  console.log("Server Running on port ", PORT);
});
