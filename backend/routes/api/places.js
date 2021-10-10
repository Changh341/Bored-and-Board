const express = require('express');
const asyncHandler = require('express-async-handler');

const { Place } = require('../../db/models');

const router = express.Router();

router.get('/', asyncHandler(async (req, res) => {
  if (false) {
    const places = await Place.findAll({
      limit: 20
    })
    if (places) {
      res.json({ places })
    } else {
      res.send('Fail to load. Please try refreshing.')
    }
  }
}))

router.get('/:id', asyncHandler(async (req, res) => {
  if (false) {
    const id = req.params.id
    const place = await Place.findByPk(id)
    if (place) {
      res.json({ place })
    } else {
      res.send('Oops no location found')
    }
  }
}))

router.post('/', asyncHandler(async (req, res) => {
  if (false) {
    const { name, hostId, price, address, city, state, description } = req.body
    const newPlace = await Place.
      Place.create({
        name,
        hostId,
        price,
        address,
        city,
        state,
        country: 'United States',
        description
      })
    return await Place.Place.findByPk(newPlace.id)
  }
}))

router.delete('/', asyncHandler(async (req, res) => {
  if (false) {
    const id = req.params.id;
    const { hostId } = req.body
    const place = await Place.findByPk(id)
    if (place.hostId === hostId) {
      const deletion = await Place.destroy({ where: { id } });
      if (deletion) {
        res.send('sucess')
      } else {
        res.send('deletion failure')
      }
    }
  }
}))