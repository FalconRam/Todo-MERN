const mongoose = require('mongoose')

const URL = 'mongodb://localhost:27017/todolist'

mongoose.connect(URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useFindAndModify: false
}, err => {
    if (err) console.log(`Error in database connection ${err}`)
    console.log(`MongoDB Connection Success..!`)
})