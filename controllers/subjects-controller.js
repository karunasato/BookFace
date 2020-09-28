// HBS Renderings

// use to render the hbs page to show all elements
//   /subjects
const index = (req, res) => {
  res.render("subjects/index");
};

// use to render the hbs page to show only one element
//   /subjects/:id
const show = (req, res) => {
  res.render("subjects/show");
};

// use to render the hbs page to show only one element
//   /subjects/add
const add = (req, res) => {
  res.render("subjects/add");
};

// use to render the hbs page to modofy an existing element
//   /subjects/:id/edit
const edit = (req, res) => {
  res.render("subjects/edit");
};

// ACTIONS
// POST request /subjects/create
const create = (req, res) => {
  res.json({ note: "hey you are at the create" });
};

// DELETE request /subjects/:id
const destroy = (req, res) => {
  res.json({ note: "hey you are at the destroy" });
};

// PUT/UPDATE request /subjects/:id
const update = (req, res) => {
  res.json({ note: "hey you are at the update" });
};

module.exports = { index, show, add, edit, create, destroy, update };
