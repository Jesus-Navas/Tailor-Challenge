// Node modules imports
require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors');

// Internal imports
const routes = require('./routes')

// Mongoose configuration
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true })
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to Database'))

// App configuration
const app = express()
app.use(cors())
app.use(express.urlencoded({extended: false}))
app.use(express.json())
app.use('/', routes)

// App Starts
app.listen(5005, () => console.log('Server Started'))

