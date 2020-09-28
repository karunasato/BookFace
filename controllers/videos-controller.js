// HBS Renderings

// use to render the hbs page to show all elements
//   /videos
const index = (req, res) => {
  res.render("videos/index");
};

// use to render the hbs page to show only one element
//   /videos/:id
const show = (req, res) => {
  res.render("videos/show");
};

// use to render the hbs page to show only one element
//   /videos/add
const add = (req, res) => {
  res.render("videos/add");
};

// use to render the hbs page to modofy an existing element
//   /videos/:id/edit
const edit = (req, res) => {
  res.render("videos/edit");
};

// ACTIONS
// POST request /videos/create
const create = (req, res) => {
  res.json({ note: "hey you are at the create" });
};

// DELETE request /videos/:id
const destroy = (req, res) => {
  res.json({
    note:
      "I see that you want to destroy a video with the id of " +
      req.params.video_id,
  });
};

// PUT/UPDATE request /videos/:id
const update = (req, res) => {
  res.json({ note: "hey you are at the update" });
};

module.exports = { index, show, add, edit, create, destroy, update };
