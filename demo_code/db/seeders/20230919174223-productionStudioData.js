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
    await queryInterface.bulkInsert('ProductionStudios',
      [
        {name: 'Mappa', location: 'Japan', yearEstablished: 2011},
        {name: 'Bones', location: 'Japan', yearEstablished: 1998},
        {name: 'White Fox', location: 'Japan', yearEstablished: 2007}
      ]
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
