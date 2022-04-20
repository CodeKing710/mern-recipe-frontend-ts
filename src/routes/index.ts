const router = require('express').Router();

router.get('/', async (req, res) => {
  res.render('../views/index');
});

module.exports = router;