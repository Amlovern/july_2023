'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ProductionStudio extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      ProductionStudio.hasMany(models.Anime, {
        foreignKey: 'studioId',
        onDelete: 'CASCADE',
        hooks: true
      })
      //SELECT * FROM ProductionStudio
      //JOIN Anime ON (ProductionStudio.id = Anime.studioId);
    }
  }
  ProductionStudio.init({
    name: {
      type: DataTypes.STRING(200),
      allowNull: false,
      unique: true,
      validate: {
        len: [3, 200]
      }
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false,
      // validate: {
      //   isAnime(value) {
      //     if (value !== 'Japan') {
      //       throw new Error('Anime comes from Japan!')
      //     }
      //   }
      // }
    },
    yearEstablished: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        max: {
          args: [2023],
          msg: 'Go back to the future where you came from!'
        },
        min: 1920
      }
    }
  }, {
    sequelize,
    modelName: 'ProductionStudio',
  });
  return ProductionStudio;
};