const express = require('express')

const cors = require('cors')

const router = require('./routes/routes')

const app = express()

const PORT = 8000

require('./models/db')

// Api
const ALL_TASKS = '/api/tasks'

// Middleware 
app.use(express.json());
app.use(cors());
app.use(ALL_TASKS, router);


//Listen
app.listen(PORT , (err) => {
  if (err) console.log(err);
  console.log("Server is started at PORT number : 8000");
});