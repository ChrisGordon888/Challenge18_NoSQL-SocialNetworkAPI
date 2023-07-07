const router = require('express').Router();
const userRoutes = require('./API/userRoutes');
const thoughtRoutes = require('./API/thoughtRoutes');

router.use('/users', userRoutes);
router.use('/thoughts', thoughtRoutes);

module.exports = router;