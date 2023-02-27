const { User } = require("../../models");

const userData = [
  {
    username: "ethikry",
    email: "ethikry@fakemail.com",
    password: "admin123",
  },
  {
    username: "TechBlogger",
    email: "techBlogger@fakemail.com",
    password: "pass1234",
  },
  {
    username: "TechGuy",
    email: "guru@fakemail.com",
    password: "pass1234",
  },
  {
    username: "MiAmor",
    email: "MiAmor@fakemail.com",
    password: "pass1234",
  },
  {
    username: "3l173H4X0R",
    email: "hacker@fakemail.com",
    password: "pass1234",
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
