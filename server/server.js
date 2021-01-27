const express = require('express')
const app = express()
const mongoose = require('mongoose')
const http = require('http').Server(app)
const cors = require('cors')
const fs = require('fs')
const path = require('path')

// Load json propierties
const filePath = path.join(__dirname, 'propierties.json')
const propierties = JSON.parse(fs.readFileSync(filePath, 'utf-8'))

require('dotenv').config()

app.use(cors())
// parse requests of content-type - application/json
app.use(express.json())
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }))

// Connection to database
const mongoUri = process.env.MONGO_URI
mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
}).then(() => console.log('Connected to database'))

const connection = mongoose.connection
const Propierty = require('./models/propierty.model')

connection.once('open', () => {
  Propierty.collection.deleteMany({})
  Propierty.collection.insertMany(propierties)
})

// Connecting routes
const propiertiesRouter = require('./routes/propierties')
app.use('/', propiertiesRouter)

// Connection to server
const port = process.env.PORT || 5000
app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})