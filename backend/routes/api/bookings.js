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
    res.json(bookings)
  }
}))

router.post('/', asyncHandler(async (req, res) => {
  const { spotId, userId, startDate, endDate } = req.body
  const newBooking = await Booking.create({
    spotId,
    userId,
    startDate,
    endDate
  })
  return res.json(newBooking)
}))

router.delete('/:id', asyncHandler(async (req, res) => {
  const { id } = req.params
  const bookId = Number(id)

  const booking = await Booking.findByPk(bookId)

  if (booking) {
    const deletion = await Booking.destroy({ where: { id: bookId } })
    if (deletion) {
      return res.json({ message: 'success' })
    }
  }

}))







module.exports = router;