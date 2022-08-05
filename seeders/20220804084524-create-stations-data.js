"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "stations",
      [
        {
          name: "Bến xe miền đông",
          address: "123, Hoàng Anh, Hà Nội",
          province: "HN",
          createdAt: "2022-08-04",
          updatedAt: "2022-08-04",
        },
        {
          name: "Bến xe miền tây",
          address: "123, Hoàng Anh, Hà Lan",
          province: "HN",
          createdAt: "2022-08-04",
          updatedAt: "2022-08-04",
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
     await queryInterface.bulkDelete('stations', null, {});
  },
};

