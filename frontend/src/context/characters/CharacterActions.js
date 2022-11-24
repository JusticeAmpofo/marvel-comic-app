import axios from 'axios'

// Get search results
export const searchCharacters = async (text) => {
    const response = await axios.get(`/api/characters/${text}`)
        .catch(function (error) {
            console.log(error)
            return error
        })
        
    return response.data.data.data.results
}

// Get single character
export const getCharacter = async (id) => {
    const response = await axios.get(`/api/characters/ids/${id}`)
        .catch(function (error) {
            console.log(error)
            return error
        })
    
    return response.data.data.data.results[0]
}