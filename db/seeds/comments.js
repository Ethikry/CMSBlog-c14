const { Comment } = require("../../models");

const commentData = [
  {
    comment_text: "No way!",
    user_id: 2,
    post_id: 3,
  },
  {
    comment_text: "First Comment :)",
    user_id: 2,
    post_id: 4,
  },
  {
    comment_text: "Conspiracy theorist",
    user_id: 4,
    post_id: 1,
  },
  {
    comment_text: "Nice.",
    user_id: 3,
    post_id: 3,
  },
  {
    comment_text: "My dog just died, let's goooooooo",
    user_id: 3,
    post_id: 4,
  },
  {
    comment_text: "As if!",
    user_id: 2,
    post_id: 1,
  },
  {
    comment_text: "Okay boomer",
    user_id: 5,
    post_id: 3,
  },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;
