const Note = require('./note')
const User = require('./user')

Note.belongsTo(User)
User.hasMany(Note)

module.exports = {
  Note, User
}
