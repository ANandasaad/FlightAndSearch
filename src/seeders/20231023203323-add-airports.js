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

    await  queryInterface.bulkInsert('Airports',[{
       name:'Heathrow Airport',
        address:'Longford TW6, United Kingdom',
        cityId:2,
        createdAt: new Date(),
        updatedAt: new Date()

    },{
      name:'London City Airport',
      address:'Hartmann Rd, London E16 2PX, United Kingdom',
      cityId:2,
      createdAt: new Date(),
      updatedAt: new Date()


    },{
      name:'London Gatwick Airport',
      address:'Horley, Gatwick RH6 0NP, United Kingdom',
      cityId:4,
      createdAt: new Date(),
      updatedAt: new Date()

    }])
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
