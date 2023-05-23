const router = require('express').Router();

const userRoutes = require('./userRoutes');
const blogPostAPIRoutes = require('./blogPostAPIRoutes');
const commentsRoutes = require('./commentsAPIRoutes');
const petsRoutes = require('./petsRoutes');

// to get here it's "localhost.com/api/"

router.use('/users', userRoutes);
router.use('/blogPost', blogPostAPIRoutes);
router.use('/comments', commentsRoutes);
router.use('/pets', petsRoutes);

module.exports = router;