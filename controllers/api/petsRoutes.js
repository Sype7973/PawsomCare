const router = require('express').Router();

const { Pets } = require('../../models/Pets');

// get all pets route
router.get('/', async (req, res) => {
    try {
        const petsData = await Pets.findAll();
        
        // Serialize data so the template can read it
        const pets = petsData.map((pet) => pet.get({ plain: true }));

        // Pass serialized data and session flag into template
        res.render('petsCard', {
            pets,
            logged_in: req.session.logged_in
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

// pets routes for specific pet
router.get(':id', async (req, res) => {
    try {
        const petsData = await Pets.findByPk(req.params.id);

        if (!petsData) {
            res.status(404).json({ message: 'No pet found with this id!' });
            return;
        }

        res.render('petsCard', {
            petsData,
            logged_in: req.session.logged_in
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

// delete a pet 
router.delete('/:id', async (req, res) => {
    try {
        const petsData = await Pets.destroy({
            where: {
                id: req.params.id,
                // user_id: req.session.user_id,
            },
        });
        
        if (!petsData) {
            res.status(404).json({ message: 'No pet found with this id!' });
            return;
        }
        
        res.render('petsCard', {
            petsData,
            logged_in: req.session.logged_in
        });

    } catch (err) {
        res.status(500).json(err);
    }
});

// create a new pet
router.post('/', async (req, res) => {
    try {
        const petsData = await Pets.create({
            // spread syntax to pass in all req.body properties
            ...req.body,
            user_id: req.session.user_id,            
        });

        res.render('petsCard', {
            petsData,
            logged_in: req.session.logged_in
        });

    } catch (err) {
        res.status(400).json(err);
    }
});



module.exports = router;
