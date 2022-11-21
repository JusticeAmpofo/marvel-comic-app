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
                loading: false
            }
        default:
            return state
    }
}

export default characterReducer