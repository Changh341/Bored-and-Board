const express = require('express');
const asyncHandler = require('express-async-handler');
const { Op } = require("sequelize");
const { singleMulterUpload, singlePublicFileUpload } = require('../../awsS3');
const { Place, Image } = require('../../db/models');
const { requireAuth, restoreUser } = require('../../utils/auth');

const router = express.Router();

router.get('/', asyncHandler(async (req, res) => {

  const places = await Place.findAll({
    limit: 100,
    include: Image
  })

  if (places) {
    res.json(places)
  }
}))

router.get('/search/:state/:city', asyncHandler(async (req, res) => {
  const { city, state } = req.params
  const places = await Place.findAll({
    limit: 100,
    include: Image,
    where: { [Op.and]: [{ city: city }, { state: state }], }
  })

  if (places) {
    res.json(places)
  }
}))

router.get('/management/:id', requireAuth, asyncHandler(async (req, res) => {
  const { id } = req.params

  const places = await Place.findAll({
    where: { hostId: id },
  })
  if (places) {
    res.json(places)
  }
}))

router.get('/:id', asyncHandler(async (req, res) => {

  const { id } = req.params
  const placeId = Number(id)
  const place = await Place.findByPk(placeId)
  console.log(place)
  if (place) {
    res.json(place)
  }

}))

router.post('/', singleMulterUpload("image"), asyncHandler(async (req, res) => {
  const { name, hostId, price, address, city, state, country, description } = req.body
  const placePic = await singlePublicFileUpload(req.file);
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
  if (placePic) {
    const newImage = await Image.create({
      spotId: newPlace.id,
      url: placePic
    })
  } else {
    const newImage = await Image.create({
      spotId: newPlace.id,
      url: null
    })
  }
  return res.json(newPlace);


}))

router.put('/edit/:id', singleMulterUpload("image"), asyncHandler(async (req, res) => {
  const { name, price, address, city, state, description } = req.body
  const { id } = req.params
  const placePic = await singlePublicFileUpload(req.file);
  const updated = await Place.update({
    name,
    price,
    address,
    city,
    state,
    description
  }, { where: { id } })
  if (placePic) {
    const updatedImage = await Image.update({
      url: placePic
    }, { where: { spotId: id } })
  }
  return res.json(req.body);


}))


router.delete('/:hostId/:id', asyncHandler(async (req, res) => {

  const { hostId, id } = req.params;
  const place = await Place.findByPk(id)
  if (place.hostId == hostId) {
    const deletion = await Place.destroy({ where: { id } });
    if (deletion) {
      return res.json({ message: 'success' });
    }
  }

}))
module.exports = router;