const router = require('express').Router();

const { Pets } = require('../models');

// to get here its localhost.com/signup/
router.get('/', async (req, res) => {
    try {
        res.render('petSignUp');
    } catch (err) {
        res.status(500).json(err);
    }
}
);
