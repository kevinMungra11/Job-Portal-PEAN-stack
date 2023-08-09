'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('People',
      [
        {
          "id": "e85c6d06-4f4f-4c50-9423-74a68f7d3a9c",
          "first_name": "John",
          "last_name": "Doe",
          "user_name": "johndoe",
          "is_admin": false,
          "bio": "I am a software engineer.",
          "title": "Software Engineer",
          "gender": "Male",
          "email": "johndoe@example.com",
          "password": "hashed_password",
          "is_signedIn": true,
          "created_at": "2023-04-16T08:30:00.000Z",
          "updated_at": "2023-04-17T10:20:00.000Z"
        },
        {
          "id": "a18b94f7-8b20-42a7-9e9e-1da31c4636c4",
          "first_name": "Jane",
          "last_name": "Doe",
          "user_name": "janedoe",
          "is_admin": false,
          "bio": "I am a web developer.",
          "title": "Web Developer",
          "gender": "Female",
          "email": "janedoe@example.com",
          "password": "hashed_password",
          "is_signedIn": true,
          "created_at": "2023-04-15T09:40:00.000Z",
          "updated_at": "2023-04-17T11:30:00.000Z"
        },
        {
          "id": "c0d7e0a9-7113-4bf4-9354-4b4ad4f52c7d",
          "first_name": "David",
          "last_name": "Smith",
          "user_name": "davidsmith",
          "is_admin": false,
          "bio": "I am a data analyst.",
          "title": "Data Analyst",
          "gender": "Male",
          "email": "davidsmith@example.com",
          "password": "hashed_password",
          "is_signedIn": true,
          "created_at": "2023-04-14T11:50:00.000Z",
          "updated_at": "2023-04-17T12:40:00.000Z"
        },
        {
          "id": "dc03cf3f-5c67-48d5-afdb-01f3ec9349a6",
          "first_name": "Emma",
          "last_name": "Johnson",
          "user_name": "emmajohnson",
          "is_admin": false,
          "bio": "I am a graphic designer.",
          "title": "Graphic Designer",
          "gender": "Female",
          "email": "emmajohnson@example.com",
          "password": "hashed_password",
          "is_signedIn": true,
          "created_at": "2023-04-13T12:10:00.000Z",
          "updated_at": "2023-04-17T13:50:00.000Z"
        }
      ], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
