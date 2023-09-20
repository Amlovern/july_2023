'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class AnimeGenre extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  AnimeGenre.init({
    animeId: {
      type: DataTypes.INTEGER
    },
    genreId: {
      type: DataTypes.INTEGER
    }
  }, {
    sequelize,
    modelName: 'AnimeGenre',
  });
  return AnimeGenre;
};