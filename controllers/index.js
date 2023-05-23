const router = require('express').Router();

const apiRoutes = require('./api');
const homePageRoutes = require('./api/homePageRoutes');

// to get here its just "localhost.com/"

router.use('/', homePageRoutes);
router.use('/api', apiRoutes);

module.exports = router;
