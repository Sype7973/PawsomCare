// this page now acts as the main route for rendering all the handlebars pages.
// in tis page, you do all the gets that you need fromt the API routes to get the info and pass it 
// to handlebars to display.
// API routes deal with posting and putting. 
// The homepage route deals with getting the info from the database (not API) and rendering the page

// API saves info to the databse
// homeroutes gets info from the database and passes it to handlebars to render (with res.render)

const router = require('express').Router();

