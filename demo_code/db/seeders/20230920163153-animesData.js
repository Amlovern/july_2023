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
      {title: 'A Silent Voice', releaseYear: 2016, numEpisodes: 1, type: 'movie', completed: true, avgRating: 8.94, studioId: 6},
      {title: 'Demon Slayer', releaseYear: 2019, numEpisodes: 26, type: 'show', completed: true, avgRating: 8.5, studioId: 7},
      {title: 'Cowboy Bebop', releaseYear: 1998, numEpisodes: 26, type: 'show', completed: true, avgRating: 8.75, studioId: 8},
      {title: 'Reborn as a Vending Machine, I Now Wander the Dungeon', releaseYear: 2023, numEpisodes: 12, type: 'show', completed: false, avgRating: 6.39, studioId: 9},
      {title: 'Kiki\'s Delivery Service', releaseYear: 1989, numEpisodes: 1, type: 'movie', completed: true, avgRating: 8.22, studioId: 10},
      {title: 'Black Clover', releaseYear: 2017, numEpisodes: 170, type: 'show', completed: true, avgRating: 8.15, studioId: 11},
      {title: 'Chainsaw Man', releaseYear: 2022, numEpisodes: 12, type: 'show', completed: true, avgRating: 8.56, studioId: 1},
      {title: 'My Hero Academia', releaseYear: 2016, numEpisodes: 12, type: 'show', completed: true, avgRating: 7.88, studioId: 2},
      {title: 'One Punch Man', releaseYear: 2015, numEpisodes: 12, type: 'show', completed: true, avgRating: 8.5, studioId: 4},
      {title: 'InuYasha', releaseYear: 2000, numEpisodes: 167, type: 'show', completed: true, avgRating: 7.86, studioId: 8},
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
    await queryInterface.bulkDelete('Animes', {
      title: ['Fullmetal Alchemist: Brotherhood', 'Steins;Gate', 'Hunter x Hunter', 'Love is War: Ultra Romantic', 'A Silent Voice', 'Demon Slayer', 'Cowboy Bebop', 'Reborn as a Vending Machine, I Now Wander the Dungeon', 'Kiki\'s Delivery Service', 'Black Clover', 'Chainsaw Man', 'My Hero Academia', 'One Punch Man', 'InuYasha']
    })
  }
};
