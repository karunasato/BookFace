// Dummy data, before using Sequelize

let subjects = [
  { id: 5945, title: "Javascript", description: "Watever" },
  { id: 1251, title: "C#", description: "Watever" },
  { id: 9521, title: "HTML", description: "Watever" },
  { id: 8423, title: "CSS", description: "Watever" },
  { id: 4587, title: "Vue.js", description: "Watever" },
];

let books = [{ id: 84512524, title: "Learning JS", subject_id: 5945 }];

let videos = [
  {
    id: 41694651481,
    title: "JS in 1 hour",
    link: "youtube.com",
    subject_id: 5945,
  },
];

module.exports = { subjects, books, videos };
