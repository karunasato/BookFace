const Subject = require("./src/models/Subject");

const subjects = [
  {
    title: "HTML",
    desc: "Learn the web itself",
  },
  {
    title: "Javascript",
    desc: "The most popular porgramming language in 2020",
  },
  {
    title: "CSS",
    desc: "Cascade Style Sheet",
  },
  {
    title: "JQuery",
    desc: "Learn JQuery",
  },
  {
    title: "MySQL",
    desc: "Learn Relational Databases",
  },
];

async function boostrap() {
  const Subject = require("./src/models/Subject");

  const errHandler = (err) => {
    console.error("Error: ", err);
  };

  await subjects.forEach(async (subject) => {
    console.log("adding value");
    await Subject.create(subject).catch(errHandler);
  });

  process.exit;
}

boostrap();
