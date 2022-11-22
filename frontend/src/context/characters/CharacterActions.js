import axios from 'axios'

// Get search results
export const searchCharacters = async (text) => {
    const response = await axios.get(`/api/characters/${text}`)
    return response.data.data.data.results
}

// Get single character
export const getCharacter = async (id) => {
    const response = await axios.get(`/api/characters/ids/${id}`)
    return response.data.data.data.results[0]
}