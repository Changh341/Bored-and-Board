'use strict';
module.exports = (sequelize, DataTypes) => {
  const Place = sequelize.define('Place', {
    name: DataTypes.STRING,
    hostId: DataTypes.INTEGER,
    price: DataTypes.INTEGER,
    address: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    country: DataTypes.STRING,
    lat: DataTypes.INTEGER,
    long: DataTypes.INTEGER,
    description: DataTypes.STRING
  }, {});
  Place.associate = function(models) {
    // associations can be defined here
  };
  return Place;
};