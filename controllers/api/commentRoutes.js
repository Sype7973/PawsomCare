const router = require('express').Router();
const { User, blogPost, comments, Pets } = require('../../Models');

// GET all comments; but i don't think we need to do this - because comments are specific to blogpost; so we should be able to get all comments for a blogpost?
router.get('/', async (req, res) => {
    try {
        const commentData = await comments.findAll({
            include: [{ model: User }, { model: blogPost }, { model: Pets }],
        });
        res.status(200).json(commentData);
    }
    catch (err) {
        res.status(500).json(err);
    }
}
);

// GET specific comment by id
router.get('/:id', async (req, res) => {
    try {
        const commentData = await comments.findByPk(req.params.id, {
            include: [{ model: User }, { model: blogPost }, { model: Pets }],
        });
        if (!commentData) {
            res.status(404).json({ message: 'No comment found with that id!' });
            return;
        }
        res.status(200).json(commentData);
    }
    catch (err) {
        res.status(500).json(err);
    }
}
);

// POST a comment - is pet ID required to post a comment? - need to add res renders
router.post('/', async (req, res) => {
    try {
        const commentData = await comments.create({
            comment: req.body.comment,
            user_id: req.body.user_id,
            blogPost_id: req.body.blogPost_id,
            pet_id: req.body.pet_id,
        });
        res.status(200).json(commentData);
    }
    catch (err) {
        res.status(400).json(err);
    }
}
);


