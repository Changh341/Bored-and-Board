const express = require('express');
const asyncHandler = require('express-async-handler');

const { requireAuth } = require('../../utils/auth');
const { Booking, Place } = require('../../db/models');

const router = express.Router();

router.get('/user/:id', asyncHandler(async (req, res) => {
  const { id } = req.params
  const bookings = await Booking.findAll({
    where: { userId: id },
    include: Place
  })
  if (bookings) {
    console.log(bookings)
    res.json(bookings)
  }
}))







module.exports = router;