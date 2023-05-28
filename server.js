const path = require('path');
const express = require('express');
const routes = require('./controllers');
const helpers = require('./utils/helpers');
const multer = require('multer');


const exphbs = require('express-handlebars');
const session = require('express-session');

// import sequelize connection
const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
// console logger for http requests
const morgan = require('morgan')


const app = express();
const PORT = process.env.PORT || 8080;
// multer storage engine
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, '/resources/uploads')
  },
  filename: function (req, file, cb) {
    const mimeExt ={
      'image/jpeg': '.jpeg',
      'image/png': '.png',
      'image/gif': '.gif',
      'image/jpg': '.jpg'
    }
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, file.fieldname + '-' + uniqueSuffix)
  }
})

const upload = multer({ 
  storage: storage,
  fileFilter:(req, file, cb) => {
    if (file.mimetype !== 'image/png'
      || file.mimetype !== 'image/jpeg'
      || file.mimetype !== 'image/gif'
      || file.mimetype !== 'image/jpg') {
      return cb(null, false)
    }
    cb(null, true)
    req.fileValidationError = 'Unfortunately, the file type you are trying to upload is not supported. Please try again with a .png, .jpeg, .jpg, or .gif file.'
  }
})

module.exports = {
  upload: upload,
};

// Sets up session and connect to our Sequelize db
const sess = {
  secret: 'Super secret secret',
  // Express session will use cookies by default, but we can specify options for those cookies by adding a cookies property to our session options.
  cookie: {
    // httpOnly tells express-session to only store session cookies when the protocol being used to connect to the server is HTTP.
    httpOnly: true,
    // secure tells express-session to only initialize session cookies when the protocol being used is HTTPS. Having this set to true, and running a server without encryption will result in the cookies not showing up in your developer console.
    secure: false,
    // sameSite tells express-session to only initialize session cookies when the referrer provided by the client matches the domain out server is hosted from.
    sameSite: 'strict',
  },
  resave: false,
  saveUninitialized: true,
  // Sets up session store
  store: new SequelizeStore({
    db: sequelize,
  }),
};

app.use(session(sess));

// Create the Handlebars.js engine object with custom helper functions
const hbs = exphbs.create({ helpers });

// Inform Express.js which template engine we're using
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');


app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));


app.use(routes);


// sync sequelize models to the database, then turn on the server
sequelize.sync().then(() => {
  app.listen(PORT, () => console.log(`App listening on port ${PORT}!`));
});

