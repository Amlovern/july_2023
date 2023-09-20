'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   const { AnimeGenre } = require('../models')
   AnimeGenre.bulkCreate(
    [
      {animeId: 1, genreId: 2},
      {animeId: 2, genreId: 3},
      {animeId: 3, genreId: 4},
      {animeId: 4, genreId: 5},
      {animeId: 1, genreId: 5},
      {animeId: 2, genreId: 4},
      {animeId: 3, genreId: 3},
    ], {validate: true}
   )
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('AnimeGenres', {
      animeId: [1, 2, 3, 4]
    })
  }
};
