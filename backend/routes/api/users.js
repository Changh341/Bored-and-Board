const express = require('express');
const asyncHandler = require('express-async-handler');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');
const faker = require('faker');
const weightedGenerator = require('../../db/weightedGen')
const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { User, Place, Booking } = require('../../db/models');

const router = express.Router();

Date.prototype.addDays = function (days) {
  var date = new Date(this.valueOf());
  date.setDate(date.getDate() + days);
  return date;
}

let date = new Date()

const validateSignup = [
  check('email')
    .exists({ checkFalsy: true })
    .isEmail()
    .withMessage('Please provide a valid email.'),
  check('username')
    .exists({ checkFalsy: true })
    .isLength({ min: 4 })
    .withMessage('Please provide a username with at least 4 characters.'),
  check('username')
    .not()
    .isEmail()
    .withMessage('Username cannot be an email.'),
  check('password')
    .exists({ checkFalsy: true })
    .isLength({ min: 6 })
    .withMessage('Password must be 6 characters or more.'),
  handleValidationErrors,
];

router.post(
  '/',
  validateSignup,
  asyncHandler(async (req, res) => {
    const { email, password, username } = req.body;
    const user = await User.signup({ email, username, password });

    await setTokenCookie(res, user);

    return res.json({
      user,
    });
  }),
);


router.post(
  '/demo',
  asyncHandler(async (req, res) => {
    const user = await User.signup({
      email: faker.internet.email(),
      username: faker.internet.userName(),
      password: faker.internet.password()
    });

    await setTokenCookie(res, user);
    console.log(user.id)
    const place = await Place.create({
      name: weightedGenerator('title'),
      hostId: user.id,
      price: weightedGenerator('cost'),
      address: weightedGenerator('address'),
      city: weightedGenerator('city'),
      state: weightedGenerator('state'),
      country: 'United States',
      description: weightedGenerator('describe')
    })
    const bookedPlace = await Place.create({
      name: weightedGenerator('title'),
      hostId: 1,
      price: weightedGenerator('cost'),
      address: weightedGenerator('address'),
      city: weightedGenerator('city'),
      state: weightedGenerator('state'),
      country: 'United States',
      description: weightedGenerator('describe')
    })
    const booking = await Booking.create({
      spotId: bookedPlace.id,
      userId: user.id,
      startDate: date.addDays(3),
      endDate: date.addDays(6)
    })

    return res.json({
      user,
    });
  }),
);

module.exports = router;