const { subjects } = require("../data/database");

const index = (req, res) => {
  // rendering .hbs view of subjects and sending the subjects to the view
  res.render("subjects/index", { subjects: subjects, title: "Subjects List!" });
};

const show = (req, res) => {
  console.log("subjects controller ");
  const subject = subjects.find((x) => x.id == req.params.subject_id);

  res.render("subjects/show");
  // res.json()
};

module.exports = { index, show };
