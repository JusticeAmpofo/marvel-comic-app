const asyncHandler = require('express-async-handler')
const axios = require('axios')
const { getHash } = require('../utils/utlis')

const baseURL = 'http://gateway.marvel.com/v1/public/'
const publicKey = process.env.API_PUBLIC_KEY
const privateKey = process.env.API_PRIVATE_KEY

// @desc    Get all characters
// @route   /api/characters
// @access  Public
const getCharacters = asyncHandler(async (req, res) => {
    const ts = new Date().toString()

    const hash = getHash(ts, privateKey, publicKey)

    const response = await axios.get(`${baseURL}/characters?ts=${ts}&apikey=${publicKey}&hash=${hash}`)

    if(response.data) {
        const { data } = response
        res.json({ data })
    } else {
        res.status(401)
        throw new Error('Invalid API Request')
    }
})

// @desc    Search for characters
// @route   /api/characters/:characterName
// @access  Public
const searchCharacters = asyncHandler(async (req, res) => {
    const ts = new Date().toString()

    const hash = getHash(ts, privateKey, publicKey)

    const character = req.params.characterName

    const response = await axios.get(`${baseURL}/characters?nameStartsWith=${character}&ts=${ts}&apikey=${publicKey}&hash=${hash}`)

    if(response.data) {
        const { data } = response
        res.json({ data })
    } else {
        res.status(401)
        throw new Error('Invalid API Request')
    }
})

// @desc    Get a single character
// @route   /api/characters/ids/:characterId
// @access  Public
const getCharacter = asyncHandler(async (req, res) => {
    const ts = new Date().toString()

    const hash = getHash(ts, privateKey, publicKey)

    const characterId = req.params.characterId

    const response = await axios.get(`${baseURL}/characters/${characterId}?ts=${ts}&apikey=${publicKey}&hash=${hash}`)

    if(response.data) {
        const { data } = response
        res.json({ data })
    } else {
        res.status(401)
        throw new Error('Invalid API Request')
    }
})

module.exports = { 
    getCharacters, 
    searchCharacters, 
    getCharacter 
}