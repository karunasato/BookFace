let subjects = [
  { id: 0, title: "Javascript", description: "Watever" },
  { id: 1, title: "C#", description: "Watever" },
];

const index = (req, res) => {
  console.log("subjects controller ");
  const subject = subjects.find((x) => x.id == req.params.subject_id);

  res.json(subject);
};

module.exports = { index };
