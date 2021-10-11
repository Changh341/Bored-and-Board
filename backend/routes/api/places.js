const express = require('express');
const asyncHandler = require('express-async-handler');

const { Place } = require('../../db/models');

const router = express.Router();

router.get('/', asyncHandler(async (req, res) => {

  const places = await Place.findAll({
    limit: 10
  })
  if (places) {
    res.json(places)
  }
}))

router.get('/:id', asyncHandler(async (req, res) => {

  const id = req.params.id
  const place = await Place.findByPk(id)
  if (place) {
    res.json(place)
  }

}))

router.post('/', asyncHandler(async (req, res) => {

  const { name, hostId, price, address, city, state, country, description } = req.body
  const newPlace = await Place.create({
    name,
    hostId,
    price,
    address,
    city,
    state,
    country,
    description
  })
  return res.json(newPlace);


}))

router.delete('/', asyncHandler(async (req, res) => {

  const id = req.params.id;
  const { hostId } = req.body
  const place = await Place.findByPk(id)
  if (place.hostId === hostId) {
    const deletion = await Place.destroy({ where: { id } });
    if (deletion) {
      return res.json({ message: 'success' });
    }
  }

}))
module.exports = router;