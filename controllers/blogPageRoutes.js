const router = require('express').Router();
const withAuth = require('../utils/withAuth');

const { BlogPost, comments, User } = require('../Models');
const { privateDecrypt } = require('crypto');
// to get here its localhost.com/blogs/

// !!!! MIGHT BE IRRELEVANT???
// get all blogs, (cats, dogs, advice and funny stories) 
router.get('/all', withAuth, async (req, res) => {
    try {
        // Get all blogs and JOIN with user data

        // TO DO: !!!!! order from last to first?
        const blogPostsData = await BlogPost.findAll({
            include: [{ model: User }],
        });

        // Serialize data so the template can read it
        const blogPosts_noComments = blogPostsData.map((post) => post.get({ plain: true }));

        // loop through blogPosts to get comments for each blogPost
        // TO DO: !!!!! order from last to first?

        let commentsLength = 0;

        const blogPosts = await Promise.all(

            blogPosts_noComments.map(async (post) => {

                const blogPostID = post.id;

                const commentsData = await comments.findAll({
                    where: {

                        blogPost_id: blogPostID,

                    },
                });

                if (commentsData) {
                    commentsLength = commentsData.length;
                } else {
                    commentsLength = 0;
                }

                return {
                    ...post,
                    commentsLength,
                };

            })
        );

        // Pass serialized data and session flag into template

        console.log(blogPosts);
        res.render('blogs-all', {
            blogPosts,
            logged_in: req.session.logged_in,
            user_id: req.session.user_id,
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// Z - route for getting a specific blog post
// include getting comments in this route
router.get('/:id', withAuth, async (req, res) => {
    try {
        // Get all blogs and JOIN with user data

        // TO DO: !!!!! order from last to first?
        const blogPostsData = await BlogPost.findByPk(req.params.id,
            {
                include: [{ model: User }],
            });

        // Serialize data so the template can read it
        const blogPosts = blogPostsData.get({ plain: true });

        console.log(blogPosts);

        const commentsData = await comments.findAll({
            where: {
                blogPost_id: blogPosts.id,
            },
            include: [{ model: User }],
        });

        // Serialize data so the template can read it
        const commentsArray = commentsData.map((post) => post.get({ plain: true }));

        console.log(commentsArray);

        // Pass serialized data and session flag into template
        res.render('blog-one', {
            blogPosts,
            commentsArray,
            logged_in: req.session.logged_in,
            user_id: req.session.user_id,
        });
    } catch (err) {
        res.status(500).json(err);
        console.log(err);
    }
});



// Z - route for getting cat or dog blogs that are advice/funny/or all
router.get('/:pet_category/:post_type', withAuth, async (req, res) => {
    // /:location/:cagory/:difficulty

    console.log(req.params.post_type);
    try {
        // Get all blogs and JOIN with user data

        let blogPostsData;
        
        if ((req.params.post_type === 'all') && (req.params.pet_category === 'all')) {
            blogPostsData = await BlogPost.findAll({
                include: [{ model: User }],
                order: [['updatedAt', 'DESC']],
            });
        } else if (req.params.pet_category === 'all') {
            blogPostsData = await BlogPost.findAll({
                where: {
                    post_type: req.params.post_type,
                },
                include: [{ model: User }],
                order: [['updatedAt', 'DESC']],
            });
        } else if (req.params.post_type === 'all') {
            blogPostsData = await BlogPost.findAll({
                where: {
                    pet_category: req.params.pet_category,
                },
                include: [{ model: User }],
                order: [['updatedAt', 'DESC']],
            });
        } else {
            blogPostsData = await BlogPost.findAll({
                where: {
                    pet_category: req.params.pet_category,
                    post_type: req.params.post_type,
                },
                include: [{ model: User }],
                order: [['updatedAt', 'DESC']],
            });
        }
        // Serialize data so the template can read it
        const blogPosts_noComments = blogPostsData.map((post) => post.get({ plain: true }));

        // loop through blogPosts to get comments for each blogPost
        // TO DO: !!!!! order from last to first?

        let commentsLength = 0;

        const blogPosts = await Promise.all(

            blogPosts_noComments.map(async (post) => {

                const blogPostID = post.id;

                const commentsData = await comments.findAll({
                    where: {

                        blogPost_id: blogPostID,

                    },
                });

                if (commentsData) {
                    commentsLength = commentsData.length;
                } else {
                    commentsLength = 0;
                }

                return {
                    ...post,
                    commentsLength,
                };

            })
        );

        post_type = req.params.post_type;
        pet_category = req.params.pet_category;
        // Pass serialized data and session flag into template
        res.render('blogs-all', {
            blogPosts,
            logged_in: req.session.logged_in,
            own_user_id: req.session.user_id,
            pet_category,
            post_type,
        });
    } catch (err) {
        res.status(500).json(err);
        console.log(err);
    }
});

module.exports = router;