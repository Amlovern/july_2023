'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Genre extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Genre.belongsToMany(models.Anime, {
        through: models.AnimeGenre,
        foreignKey: 'genreId',
        otherKey: 'animeId'
      })
      //SELECT * FROM Genres
      //JOIN AnimeGenres ON (Genres.id = AnimeGenres.genreId)
      //JOIN Anime ON (AnimeGenres.animeId = Anime.id);
    }
  }
  Genre.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    }
  }, {
    sequelize,
    modelName: 'Genre',
  });
  return Genre;
};