const router = require('express').Router();
const withAuth = require('../utils/withAuth');

router.get('/', withAuth, async (req, res) => {
  try {
    res.render('petSignUp',
    {
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;