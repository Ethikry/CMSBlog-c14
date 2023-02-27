const { Post } = require("../../models");

const postData = [
  {
    title:
      "Bao Fan: Missing Chinese billionaire assisting authorities, firm says",
    content:
      "Billionaire technology dealmaker Bao Fan is cooperating with Chinese authorities conducting an investigation, his bank says.",
    user_id: 1,
  },
  {
    title:
      "Google’s bringing Magic Eraser to all Google One subscribers — including iPhone users",
    content:
      "The feature used to only be available on phones with the company’s Tensor processors, but now it’s coming to the standard Google Photos for Android and iOS app.",
    user_id: 2,
  },
  {
    title: "Lorem Ipsum",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    user_id: 2,
  },
  {
    title:
      "Nvidia is still making billions in Q4 2023 despite a giant drop in PC demand",
    content:
      "Nvidia just reported its fourth quarter and full-year earnings, and it’s not exactly rosy — at least compared to pandemic highs. Last year, Nvidia had record quarterly revenue of $7.64 billion, including $3 billion in pure profit. For Q4 of its fiscal 2023, the company forecast that it would see just $6 billion in quarterly revenue in today’s earnings results, and that’s just about where it landed: $6.05 billion in revenue, down 21 percent, of which $1.4 billion was profit, down 53 percent. For the full year, it raked in $26.92 billion, almost identical to last year, though profit was down 55 percent.",
    user_id: 5,
  },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
