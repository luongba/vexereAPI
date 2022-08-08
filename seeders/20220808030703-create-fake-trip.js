"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert(
      "trips",
      [
        {
          fromStation: 1,
          toStation: 3,
          startTime: "2022-08-08 8:30:00",
          price: 20000,
          createdAt: "2022-08-08 02:01:31",
          updatedAt: "2022-08-08 02:01:31"
        },
        {
          fromStation: 2,
          toStation: 3,
          startTime: "2022-08-08 8:30:00",
          price: 40000,
          createdAt: "2022-08-08 02:01:31",
          updatedAt: "2022-08-08 02:01:31"
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('trips', null, {});
  },
};

