const router = require('express').Router();
const withAuth = require('../../utils/withAuth');

const { Pets } = require('../../models/Pets');

// get all pets route
router.get('/', withAuth, async  (req, res) => {
    try {
        const petsData = await Pets.findAll();
        
        // Serialize data so the template can read it
        const pets = petsData.map((pet) => pet.get({ plain: true }));

        // Pass serialized data and session flag into template
        res.render('ownerPets', {
            pets,
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

// pets routes for specific pet
router.get('/:id', withAuth, async (req, res) => {
    try {
        const petsData = await Pets.findByPk(req.params.id);

        if (!petsData) {
            res.status(404).json({ message: 'No pet found with this id!' });
            return;
        }
            // needs to change to owner pets to show specific pet
        res.render('petsCard', {
            petsData,
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

// delete a pet 
router.delete('/:id', withAuth, async (req, res) => {
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
        });

    } catch (err) {
        res.status(500).json(err);
    }
});

// create a new pet
router.post('/', withAuth, async (req, res) => {
    try {
        const petsData = await Pets.create({
            // spread syntax to pass in all req.body properties
            ...req.body,
            user_id: req.session.user_id,            
        });

        res.render('petsCard', {
            petsData,
        });

    } catch (err) {
        res.status(400).json(err);
    }
});



module.exports = router;
