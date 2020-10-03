// HBS Renderings

// use to render the hbs page to show all elements
//   /books
const index = (req, res) => {
  req.session.user = 'Tom'
  res.render('books/index')
}

// use to render the hbs page to show only one element
//   /books/:id
const show = (req, res) => {
  res.render('books/show')
}

// use to render the hbs page to show only one element
//   /books/add
const add = (req, res) => {
  res.render('books/add')
}

// use to render the hbs page to modofy an existing element
//   /books/:id/edit
const edit = (req, res) => {
  res.render('books/edit')
}

// ACTIONS
// POST request /books/create
const create = (req, res) => {
  res.json({ note: 'hey you are at the create' })
}

// DELETE request /books/:id
const destroy = (req, res) => {
  res.json({ note: 'hey you are at the destroy' })
}

// PUT/UPDATE request /books/:id
const update = (req, res) => {
  res.json({ note: 'hey you are at the update' })
}

module.exports = { index, show, add, edit, create, destroy, update }
