// this page now acts as the main route for rendering all the handlebars pages.
// in tis page, you do all the gets that you need fromt the database info and pass it 
// to handlebars to display.
// API routes deal with posting and putting. 
// The homepage route deals with getting the info from the database (not API) and rendering the home page

// API saves info to the databse
// homeroutes gets info from the database and passes it to handlebars to render (with res.render)

// to get here its 'localhost.com/'
// right now localhost.com/ doesnt show anything
// this needs to be coded to display the homepage / slide 1 

const router = require('express').Router();


module.exports = router;