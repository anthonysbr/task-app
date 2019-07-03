const mongoose = require('mongoose');
const dbUrl = 'mongodb://localhost/mern-tasks'

mongoose.connect(dbUrl, { useNewUrlParser: true })
.then(db => console.log('Conected to database'))
.catch(err => console.log(err));

module.exports = mongoose;