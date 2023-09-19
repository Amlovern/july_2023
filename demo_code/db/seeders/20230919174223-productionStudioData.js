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
   const { ProductionStudio } = require('../models')
    // await queryInterface.bulkInsert('ProductionStudios',
    //   [
    //     {name: 'Mappa', location: 'Japan', yearEstablished: 2011},
    //     {name: 'Bones', location: 'Japan', yearEstablished: 1998},
    //     {name: 'White Fox', location: 'Japan', yearEstablished: 2007}
    //   ]
    // )

    await ProductionStudio.bulkCreate(
      [
        {name: 'Mappa', location: 'Japan', yearEstablished: 2011},
        {name: 'Bones', location: 'Japan', yearEstablished: 1998},
        {name: 'White Fox', location: 'Japan', yearEstablished: 2007},
        {name: 'White Fox2', location: 'Japan', yearEstablished: 2007}
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
    await queryInterface.bulkDelete('ProductionStudios', {
      name: ['Mappa', 'Bones', 'White Fox']
    })
  }
};
