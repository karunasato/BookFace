// Requiring necessary npm packages
const express = require('express')
const session = require('express-session')
const bodyParser = require('body-parser')

// ROUTES
// const userRoutes = require('./routes/viewsRoutes/user-routes')
const subjectRoutes = require('./routes/viewsRoutes/subjects-routes')
const bookRoutes = require('./routes/viewsRoutes/books-routes')
const videoRoutes = require('./routes/viewsRoutes/videos-routes')
const bookselection = require('./routes/apiRoutes/bookselection')
const externalApi = require('./routes/apiRoutes/externalAPI')
const findabook = require('./routes/apiRoutes/findabook')
const studygroup = require('./routes/apiRoutes/studygroup')

const exphbs = require('express-handlebars')

// Setting up port and requiring models for syncing
const PORT = process.env.PORT || 8070
// const db = require("./models");

var myGlobals = {
  user: function (ctx) {
    console.log(ctx.data.exphbs.helpers)
    return 'hey'
  }
}

// Creating express app and configuring middleware needed for authentication
const app = express()

/* BODY PARSER */

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

/* * * * * * * */

// Session
app.set('trust proxy', 1) // trust first proxy
app.use(
  session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 60000 }
  })
)

// Set viewengine
app.engine(
  '.hbs',
  exphbs({
    extname: '.hbs',
    helpers: myGlobals
  })
)
app.set('view engine', '.hbs')

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(express.static('public'))
// We need to use sessions to keep track of our user's login status
// Requiring our routes

// app.use('/user', userRoutes)
app.use('/subjects', subjectRoutes)
app.use('/books', bookRoutes)
app.use('/videos', videoRoutes)
// app.use("/api/books", bookselection);
app.use('/api/externalAPI', externalApi)
// app.use("/api/findbook", findabook);
// app.use("/api/studygroup", studygroup);

// require('./src/bootstrap')()

app.listen(PORT, () => {
  console.log('Server Running on port ', PORT)
})
