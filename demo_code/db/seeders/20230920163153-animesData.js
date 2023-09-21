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

    // const data = [
    //   {
    //     name: 'Mappa',
    //     anime: [
    //       {title: 'Chainsaw Man', releaseYear: 2022, numEpisodes: 12, type: 'show', completed: true, avgRating: 8.56}
    //     ]
    //   },
    //   {
    //     name: 'Bones',
    //     anime: [
    //       {title: 'Fullmetal Alchemist: Brotherhood', releaseYear: 2009, numEpisodes: 64, type: 'show', completed: true, avgRating: 9.1},
    //       {title: 'My Hero Academia', releaseYear: 2016, numEpisodes: 12, type: 'show', completed: true, avgRating: 7.88}
    //     ]
    //   },
    //   {
    //     name: 'White Fox',
    //     anime: [
    //       {title: 'Steins;Gate', releaseYear: 2011, numEpisodes: 24, type: 'show', completed: true, avgRating: 9.07}
    //     ]
    //   },
    //   {
    //     name: 'Madhouse',
    //     anime: [
    //       {title: 'Hunter x Hunter', releaseYear: 2011, numEpisodes: 148, type: 'show', completed: true, avgRating: 9.04},
    //       {title: 'One Punch Man', releaseYear: 2015, numEpisodes: 12, type: 'show', completed: true, avgRating: 8.5}
    //     ]
    //   },
    //   {
    //     name: 'A-1 Pictures',
    //     anime: [
    //       {title: 'Love is War: Ultra Romantic', releaseYear: 2022, numEpisodes: 13, type: 'show', completed: true, avgRating: 9.04}
    //     ]
    //   },
    //   {
    //     name: 'Kyoto Animation',
    //     anime: [
    //       {title: 'A Silent Voice', releaseYear: 2016, numEpisodes: 1, type: 'movie', completed: true, avgRating: 8.94}
    //     ]
    //   },
    //   {
    //     name: 'ufotable',
    //     anime: [
    //       {title: 'Demon Slayer', releaseYear: 2019, numEpisodes: 26, type: 'show', completed: true, avgRating: 8.5}
    //     ]
    //   },
    //   {
    //     name: 'Sunrise',
    //     anime: [
    //       {title: 'Cowboy Bebop', releaseYear: 1998, numEpisodes: 26, type: 'show', completed: true, avgRating: 8.75},
    //       {title: 'InuYasha', releaseYear: 2000, numEpisodes: 167, type: 'show', completed: true, avgRating: 7.86}
    //     ]
    //   },
    //   {
    //     name: 'Studio Gokumi',
    //     anime: [
    //       {title: 'Reborn as a Vending Machine, I Now Wander the Dungeon', releaseYear: 2023, numEpisodes: 12, type: 'show', completed: false, avgRating: 6.39}
    //     ]
    //   },
    //   {
    //     name: 'Studio Ghibli',
    //     anime: [
    //       {title: 'Kiki\'s Delivery Service', releaseYear: 1989, numEpisodes: 1, type: 'movie', completed: true, avgRating: 8.22}
    //     ]
    //   },
    //   {
    //     name: 'Pierrot',
    //     anime: [
    //       {title: 'Black Clover', releaseYear: 2017, numEpisodes: 170, type: 'show', completed: true, avgRating: 8.15}
    //     ]
    //   }
    // ]
    const { Anime, ProductionStudio } = require('../models')

    // for (let i = 0; i < data.length; i++) {
    //   let studioData = data[i];
    //   const studio = await ProductionStudio.findOne({
    //     where: {
    //       name: studioData.name
    //     }
    //   })
    //   for (let j = 0; j < studioData.anime.length; j++) {
    //     let animeData = studioData.anime[j];
    //     await Anime.create({...animeData, studioId: studio.id})
    //     await studio.createAnime(animeData)
    //   }
    // }



  
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
