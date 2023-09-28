'use strict';
const {
  Model, Op
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
      Anime.belongsToMany(models.Genre, {
        through: models.AnimeGenre,
        foreignKey: 'animeId',
        otherKey: 'genreId'
      })
      Anime.belongsTo(models.ProductionStudio, {
        foreignKey: 'studioId'
      })
      //SELECT * FROM Anime
      //JOIN ProductionStudios On (ProductionStudio.id = Anime.studioId)
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
    defaultScope: {
      attributes: {
        exclude: ['createdAt', 'updatedAt', 'releaseYear']
      }
    },
    scopes: {
      'essentialData': {
        attributes: ['title', 'releaseYear', 'numEpisodes', 'avgRating']
      },
      grabClassics(year) {
        // if (this.releaseYear < 2000) return title
        return {
          where: {
            releaseYear: {
              [Op.lt]: year
            }
          },
          attributes: ['title', 'releaseYear'],
          order: [['releaseYear', 'DESC']]
        }
      }
    }
  });
  return Anime;
};