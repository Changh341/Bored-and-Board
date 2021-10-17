'use strict';
module.exports = (sequelize, DataTypes) => {
  const Image = sequelize.define('Image', {
    spotId: DataTypes.INTEGER,
    url: DataTypes.TEXT
  }, {});
  Image.associate = function (models) {
    Image.belongsTo(models.Place, { foreignKey: 'spotId' });
  };
  return Image;
};