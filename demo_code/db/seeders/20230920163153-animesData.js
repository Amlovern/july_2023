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
   const { Anime } = require('../models')
   await Anime.bulkCreate(
    [
      {title: 'Fullmetal Alchemist: Brotherhood', releaseYear: 2009, numEpisodes: 64, type: 'show', completed: true, avgRating: 9.1, studioId: 2},
      {title: 'Steins;Gate', releaseYear: 2011, numEpisodes: 24, type: 'show', completed: true, avgRating: 9.07, studioId: 3},
      {title: 'Hunter x Hunter', releaseYear: 2011, numEpisodes: 148, type: 'show', completed: true, avgRating: 9.04, studioId: 4},
      {title: 'Love is War: Ultra Romantic', releaseYear: 2022, numEpisodes: 13, type: 'show', completed: true, avgRating: 9.04, studioId: 5},
      {title: '', releaseYear: 2009, numEpisodes: 64, type: 'show', completed: true, avgRating: 9.1, studioId: 2},
      {title: '', releaseYear: 2009, numEpisodes: 64, type: 'show', completed: true, avgRating: 9.1, studioId: 2},
      {title: '', releaseYear: 2009, numEpisodes: 64, type: 'show', completed: true, avgRating: 9.1, studioId: 2},
      {title: '', releaseYear: 2009, numEpisodes: 64, type: 'show', completed: true, avgRating: 9.1, studioId: 2},
      {title: '', releaseYear: 2009, numEpisodes: 64, type: 'show', completed: true, avgRating: 9.1, studioId: 2},
      {title: '', releaseYear: 2009, numEpisodes: 64, type: 'show', completed: true, avgRating: 9.1, studioId: 2},
      {title: '', releaseYear: 2009, numEpisodes: 64, type: 'show', completed: true, avgRating: 9.1, studioId: 2},
      {title: '', releaseYear: 2009, numEpisodes: 64, type: 'show', completed: true, avgRating: 9.1, studioId: 2},
      {title: '', releaseYear: 2009, numEpisodes: 64, type: 'show', completed: true, avgRating: 9.1, studioId: 2},
      {title: '', releaseYear: 2009, numEpisodes: 64, type: 'show', completed: true, avgRating: 9.1, studioId: 2},
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
  }
};
