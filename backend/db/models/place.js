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
  Place.associate = function (models) {
    Place.belongsTo(models.User, { foreignKey: 'hostId' });
    Place.hasOne(models.Image, { foreignKey: 'spotId', onDelete: 'cascade' });
    Place.belongsToMany(models.User, {
      through: "booking",
      otherKey: 'userId',
      foreignKey: 'spotId'
    })
  };
  return Place;
};