import {GET_CHARACTERS} from '../actions/types'

const initialState = {
    allCharacters: [],
}

const rootReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_CHARACTERS:
            return {
               ...state,
               allCharacters: payload,
            }
        default:
            return { ...state  }
    }
}

export default rootReducer;