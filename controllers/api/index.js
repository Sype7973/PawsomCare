const router = require('express').Router();

const userRoutes = require('./api/userRoutes');
const blogPostAPIRoutes = require('./api/blogPostAPIRoutes');
const commentsRoutes = require('./api/commentsRoutes');
const petsRoutes = require('./api/petsRoutes');

// to get here it's "localhost.com/api/"

router.use('/users', userRoutes);
router.use('/blogPost', blogPostAPIRoutes);
router.use('/comments', commentsRoutes);
router.use('/pets', petsRoutes);

module.exports = router;