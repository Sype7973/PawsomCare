const router = require('express').Router();

const apiRoutes = require('./api');

// !! this is incorrect, we need to create routes OUTSIDE of the api routes, specifically only to render the pages.
// these routes will communicate with the api routes through fetch methods, and then pass the info to handlebars to display
const homePageRoutes = require('./api/homePageRoutes');

// to get here its just "localhost.com/"

router.use('/', homePageRoutes);
router.use('/api', apiRoutes);

module.exports = router;
