const characterReducer = (state, action) => {
    switch(action.type) {
        case 'SET_LOADING':
            return {
                ...state,
                isError: false,
                loading: true
            }
        case 'SEARCH_CHARACTERS':
            return {
                ...state,
                characters: action.payload,
                firstRequestMade: true,
                loading: false
            }
        case 'GET_CHARACTER':
            return {
                ...state,
                character: action.payload,
                loading: false
            }
        case 'ERROR_FOUND':
            return {
                ...state,
                isError: true,
                loading: false
            }
        default:
            return state
    }
}

export default characterReducer