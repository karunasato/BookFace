// HBS Renderings

// use to render the hbs page to show all elements
//   /examples
const index = () => {};

// use to render the hbs page to show only one element
//   /examples/:id
const show = () => {};

// use to render the hbs page to show only one element
//   /examples/add
const add = () => {};

// use to render the hbs page to modofy an existing element
//   /examples/:id/edit
const edit = () => {};

// ACTIONS
// POST request /examples/create
const create = () => {};

// DELETE request /examples/:id
const destroy = () => {};

// PUT/UPDATE request /examples/:id
const update = () => {};

module.exports = { index, show, add, edit, create, destroy, update };
