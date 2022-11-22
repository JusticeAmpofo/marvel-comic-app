const express = require('express')
const router = express.Router()
const { 
    getCharacters, 
    searchCharacters,
    getCharacter
} = require('../controllers/characterController')

router.get('/', getCharacters)
router.get('/:characterName', searchCharacters)
router.get('/ids/:characterId', getCharacter)

module.exports = router