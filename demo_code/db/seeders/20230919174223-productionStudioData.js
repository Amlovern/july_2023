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
        {name: 'Madhouse', location: 'Japan', yearEstablished: 1972},
        {name: 'A-1 Pictures', location: 'Japan', yearEstablished: 2005},
        {name: 'Kyoto Animation', location: 'Japan', yearEstablished: 1985},
        {name: 'ufotable', location: 'Japan', yearEstablished: 2000},
        {name: 'Sunrise', location: 'Japan', yearEstablished: 1976},
        {name: 'Studio Gokumi', location: 'Japan', yearEstablished: 2010},
        {name: 'Studio Ghibli', location: 'Japan', yearEstablished: 1985},
        {name: 'Pierrot', location: 'Japan', yearEstablished: 1979},
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
      name: ['Mappa', 'Bones', 'White Fox', 'Madhouse', 'A-1 Pictures', 'Kyoto Animation', 'ufotable', 'Sunrise', 'Studio Gokumi', 'Studio Ghibli', 'Pierrot']
    })
  }
};
