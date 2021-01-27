const express = require('express')
const router = express.Router()

const Propierty = require('../models/propierty.model')

router.route('/').get((req, res) => {
  Propierty.find()
    .then(propierties => res.json(propierties))
    .catch(err => res.status(400).json('Error: ' + err))
})

module.exports = router
