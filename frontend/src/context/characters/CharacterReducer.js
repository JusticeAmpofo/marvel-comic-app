const characterReducer = (state, action) => {
    switch(action.type) {
        case 'SET_LOADING':
            return {
                ...state,
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
        default:
            return state
    }
}

export default characterReducer