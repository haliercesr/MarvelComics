import { GET_CHARACTERS, GET_COMICS_ByID, GET_CHARACTER_ByID, REMOVE_FAV, ADD_FAV } from '../actions/types'

const initialState = {
    allCharacters: [],
    character: {},
    comics: [],
    myFavorites: [],
}

const rootReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case GET_CHARACTERS:
            return {
                ...state,
                allCharacters: payload,
            }
        case GET_CHARACTER_ByID:
            return {
                ...state,
                character: payload,
            }
        case GET_COMICS_ByID:
            return {
                ...state,
                comics: payload,
            }
        case ADD_FAV:
            return {
                ...state,
                myFavorites: payload,
            }
        case REMOVE_FAV:
            return {
                ...state,
                myFavorites: payload,
            }
        default:
            return { ...state }
    }
}

export default rootReducer;