const router = require('express').Router();
const withAuth = require('../utils/withAuth');

const { BlogPost, comments } = require('../models');

// to get here its localhost.com/blogs/

// !!!! MIGHT BE IRRELEVANT???
// get all blogs, (cats, dogs, advice and funny stories) 
router.get('/all', withAuth, async (req, res) => {
    try {
        // Get all blogs and JOIN with user data

        // TO DO: !!!!! order from last to first?
        const blogPostsData = await BlogPost.findAll();

        // Serialize data so the template can read it
        const blogPosts = blogPostsData.map((post) => post.get({ plain: true }));

        // Pass serialized data and session flag into template
        res.render('blogs-all', {
            blogPosts,
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

// Z - route for getting a specific blog post
// include getting comments in this route
router.get('/:id', withAuth, async (req, res) => {
    try {
        // Get all blogs and JOIN with user data

        // TO DO: !!!!! order from last to first?
        const blogPostsData = [await BlogPost.findByPk(req.params.id, {
            include: [{ model: comments }],
            
        })];

        console.log(blogPostsData);

        // Serialize data so the template can read it
        const blogPosts = blogPostsData.map((post) => post.get({ plain: true }));

        // Pass serialized data and session flag into template
        res.render('blog-one', {
            blogPosts,
        });
    } catch (err) {
        res.status(500).json(err);
        console.log(err);
    }
});

// Z - route for getting all cat blog posts
router.get('cats/all', withAuth, async (req, res) => {
    try {
        // Get all blogs and JOIN with user data
        const category = "Cats";

        // TO DO: !!!!! order from last to first?
        const blogPostsData = await BlogPost.findAll({
            where: {
                pet_category: category,
            },
        });

        // Serialize data so the template can read it
        const blogPosts = blogPostsData.map((post) => post.get({ plain: true }));

        // Pass serialized data and session flag into template
        res.render('blogs-all', {
            blogPosts,
        });
    } catch (err) {
        res.status(500).json(err);
        console.log(err);
    }
});

// Z - route for getting all dog blog posts
router.get('dogs/all', withAuth, async (req, res) => {
    try {
        // Get all blogs and JOIN with user data

        // TO DO: !!!!! order from last to first?
        const blogPostsData = await BlogPost.findAll({
            where: {
                pet_category: "Dogs",
            },
        });

        // Serialize data so the template can read it
        const blogPosts = blogPostsData.map((post) => post.get({ plain: true }));

        // Pass serialized data and session flag into template
        res.render('blogs-all', {
            blogPosts,
        });
    } catch (err) {
        res.status(500).json(err);
    }
});
// Z - route for getting all funny cat posts
router.get('cats/funny', withAuth, async (req, res) => {
    try {
        // Get all blogs and JOIN with user data

        // TO DO: !!!!! order from last to first?
        const blogPostsData = await BlogPost.findAll({
            where: {
                pet_category: "Cats",
                post_type: "Funny",
            },
        });

        // Serialize data so the template can read it
        const blogPosts = blogPostsData.map((post) => post.get({ plain: true }));

        // Pass serialized data and session flag into template
        res.render('blogs-all', {
            blogPosts,
        });
    } catch (err) {
        res.status(500).json(err);
    }
});
// Z - route for getting all advice cat posts
router.get('cats/advice', withAuth, async (req, res) => {
    try {
        // Get all blogs and JOIN with user data

        // TO DO: !!!!! order from last to first?
        const blogPostsData = await BlogPost.findAll({
            where: {
                pet_category: "Cats",
                post_type: "Advice",
            },
        });

        // Serialize data so the template can read it
        const blogPosts = blogPostsData.map((post) => post.get({ plain: true }));

        // Pass serialized data and session flag into template
        res.render('blogs-all', {
            blogPosts,
        });
    } catch (err) {
        res.status(500).json(err);
    }
});
// Z - route for getting all funny dog posts
router.get('dogs/funny', withAuth, async (req, res) => {
    try {
        // Get all blogs and JOIN with user data

        // TO DO: !!!!! order from last to first?
        const blogPostsData = await BlogPost.findAll({
            where: {
                pet_category: "Dogs",
                post_type: "Funny",
            },
        });

        // Serialize data so the template can read it
        const blogPosts = blogPostsData.map((post) => post.get({ plain: true }));

        // Pass serialized data and session flag into template
        res.render('blogs-all', {
            blogPosts,
        });
    } catch (err) {
        res.status(500).json(err);
    }
});
// Z - route for getting all advice dogs posts
router.get('dogs/advice', withAuth, async (req, res) => {
    try {
        // Get all blogs and JOIN with user data

        // TO DO: !!!!! order from last to first?
        const blogPostsData = await BlogPost.findAll({
            where: {
                pet_category: "Dogs",
                post_type: "Advice",
            },
        });

        // Serialize data so the template can read it
        const blogPosts = blogPostsData.map((post) => post.get({ plain: true }));

        // Pass serialized data and session flag into template
        res.render('blogs-all', {
            blogPosts,
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;