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
      "users",
      [
        {
          name: "Ba",
          email: "Ba@gmail.com",
          password: "12345678",
          numberPhone: "0961545114",
          avatar: "",
          type: "ADMIN",
          createdAt: "2022-08-08 02:01:31",
          updatedAt: "2022-08-08 02:01:31"
        },
        {
          name: "Chi",
          email: "Chi@gmail.com",
          password: "12345678",
          numberPhone: "0961545115",
          avatar: "",
          type: "ADMIN",
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

    await queryInterface.bulkDelete("users", null, {});
  },
};

