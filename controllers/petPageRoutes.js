const router = require('express').Router();
const withAuth = require('../utils/withAuth');

const { Pets } = require('../models');

// to get here its localhost.com/pets/

// get all pets route
router.get('/', withAuth, async (req, res) => {
    try {
        const petsData = await Pets.findAll({
            where: {
                user_id: req.session.user_id,
            },
        });

        // Serialize data so the template can read it
        const pets = petsData.map((pet) => pet.get({ plain: true }));

        // Pass serialized data and session flag into template
        res.render('ownerPets', {
            pets,
            logged_in: req.session.logged_in,
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/all', withAuth, async (req, res) => {
    try {
        const petsData = await Pets.findAll();

        // Serialize data so the template can read it
        const pets = petsData.map((pet) => pet.get({ plain: true }));

        // Pass serialized data and session flag into template
        res.render('allPets', {
            pets,
            logged_in: req.session.logged_in,
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

// pets routes for specific pet
router.get('/:id', withAuth, async (req, res) => {
    try {
        const petsData = await Pets.findByPk(req.params.id);

        // Serialize data so the template can read it
        const pets = petsData.get({ plain: true });

        if (!pets) {
            res.status(404).json({ message: 'No pet found with this id!' });
            return;
        }
        // needs to change to owner pets to show specific pet
        res.render('petsCard', {
            pets,
            logged_in: req.session.logged_in,
        });

    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;