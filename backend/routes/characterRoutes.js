const express = require('express')
const router = express.Router()
const { getCharacters, searchCharacters } = require('../controllers/characterController')

router.get('/', getCharacters)
router.get('/:characterName', searchCharacters)

module.exports = router