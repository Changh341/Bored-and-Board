const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const placesRouter = require('./places.js')

router.use('/session', sessionRouter);
router.use('/users', usersRouter);
router.use('/places', placesRouter)

module.exports = router;