const router = require('express').Router();

const apiRoutes = require('./api');
const homePageRoutes = require('./homePageRoutes');
const blogPageRoutes = require('./blogPageRoutes');
const petPageRoutes = require('./petPageRoutes');
const petSignUpRoutes = require('./petSignUpRoutes');



router.use('/api', apiRoutes);

// to get here its just "localhost.com/blogs"
// this is to deal with all the blogRoutes
router.use('/blogs', blogPageRoutes);

// to get here its just "localhost.com/pets"
// this is to deal with all the pet routes
router.use('/pets', petPageRoutes);

// to get here its just "localhost.com/Add-A-Pet"
// this is the pet sign up page
router.use('/Add-A-Pet', petSignUpRoutes);

// to get here its just "localhost.com/"
// this is the homepage, slide 1
router.use('/', homePageRoutes);


module.exports = router;
