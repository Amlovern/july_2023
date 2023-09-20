'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Anime extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Anime.init({
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    releaseYear: DataTypes.INTEGER,
    numEpisodes: DataTypes.INTEGER,
    type: {
      type: DataTypes.STRING
    },
    completed: DataTypes.BOOLEAN,
    avgRating: {
      type: DataTypes.DECIMAL(3,2),
      validate: {
        min: 0,
        max: 10
      }
    },
    studioId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Anime',
  });
  return Anime;
};