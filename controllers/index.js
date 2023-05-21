const router = require('express').Router();

const apiRoutes = require('./api');
const homePageRoutes = require('./api/homePageRoutes');
const userRoutes = require('./api/userRoutes');
const blogPostRoutes = require('./api/blogPostRoutes');
const commentsRoutes = require('./api/commentsRoutes');
const petsRoutes = require('./api/petsRoutes');


router.use('/', homePageRoutes);
router.use('/api', apiRoutes);
router.use('/api/users', userRoutes);
router.use('/api/blogPost', blogPostRoutes);
router.use('/api/comments', commentsRoutes);
router.use('/api/pets', petsRoutes);

module.exports = router;
