const router = require('express').Router();
const withAuth = require('../../utils/withAuth');

const { Pets } = require('../../models');

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
        ...req.body,
        user_id: req.session.user_id,
      });
  
      res.status(201).json(petsData);
      // Render the 'petsCard' view
      res.render('petsCard', {
        petsData,
      });
    } catch (err) {
      res.status(400).json(err);
    }
  });

router.put('/:id', async (req, res) => {

    try {
        // update a pet by its `id` value
        const updatedPet = await Pets.update(
            {
                ...req.body,
            },
            {
                where: {
                    id: req.params.id,
                },
            }
        );

        res.status(200).json(updatedPet);

    } catch (err) {
        res.status(500).json(err);
    }

});


module.exports = router;
