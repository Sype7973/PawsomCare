const express = require('express');
const routes = require('./controllers');
// import sequelize connection
const sequelize = require('./config/connection');
// console logger for http requests
const morgan = require('morgan')


const app = express();
const PORT = process.env.PORT || 8080;

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// sync sequelize models to the database, then turn on the server
sequelize.sync().then(() => {
  app.listen(PORT, () => console.log(`App listening on port ${PORT}!`));
});
