const Subject = require('../src/models/Subject')

// HBS Renderings

// use to render the hbs page to show all elements
//   /subjects
const index = async (req, res) => {
  let subjects = []
  await Subject.findAll().then((data) => {
    data.forEach((d) => subjects.push(d.dataValues))
  })

  res.render('subjects/index', { subjects })
}

// use to render the hbs page to show only one element
//   /subjects/:id
const show = async (req, res) => {
  let subject
  await Subject.findByPk(parseInt(req.params.subject_id)).then((data) => {
    subject = data.dataValues
  })

  let videos = ['youtube.com/gdgdas', 'youtube.com/gdgdas']
  let books = ['JS something', 'blah']
  /* CODE */

  /* ADD LINKS TO APIS */

  res.render('subjects/show', { subject, videos, books })
}

// use to render the hbs page to show only one element
//   /subjects/add
const add = (req, res) => {
  res.render('subjects/add')
}

// use to render the hbs page to modofy an existing element
//   /subjects/:id/edit
const edit = (req, res) => {
  res.render('subjects/edit')
}

// ACTIONS
// POST request /subjects
const create = async (req, res) => {
  const errHandler = (err) => {
    console.error('Error: ', err)
  }

  const subject = await Subject.create({
    title: req.body.title,
    desc: req.body.desc
  }).catch(errHandler)

  res.json(subject)
}

// DELETE request /subjects/:id
const destroy = (req, res) => {
  res.json({ note: 'hey you are at the destroy' })
}

// PUT/UPDATE request /subjects/:id
const update = (req, res) => {
  res.json({ note: 'hey you are at the update' })
}

module.exports = { index, show, add, edit, create, destroy, update }
