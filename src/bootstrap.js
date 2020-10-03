const Subject = require('./models/Subject')

module.exports = async () => {
  const Subject = require('./models/Subject')

  const errHandler = (err) => {
    console.error('Error: ', err)
  }

  const subject = await Subject.create({
    title: 'Javascript',
    desc: 'Just JS'
  }).catch(errHandler)
}
