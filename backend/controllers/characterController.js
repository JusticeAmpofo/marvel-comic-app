const asyncHandler = require('express-async-handler')
const axios = require('axios')
const { getHash } = require('../utils/utlis')

const baseURL = 'http://gateway.marvel.com/v1/public/'
const publicKey = process.env.API_PUBLIC_KEY
const privateKey = process.env.API_PRIVATE_KEY

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

module.exports = { getCharacters }