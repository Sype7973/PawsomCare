const router = require('express').Router();

const apiRoutes = require('./api');
const homePageRoutes = require('./homePageRoutes');
const blogPageRoutes = require('./blogPageRoutes');



router.use('/api', apiRoutes);

// to get here its just "localhost.com/blogs"
// this is to deal with all the blogRoutes
router.use('/blogs', blogPageRoutes);

// to get here its just "localhost.com/"
// this is the homepage, slide 1
router.use('/', homePageRoutes);

module.exports = router;
