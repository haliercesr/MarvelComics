import { GET_CHARACTERS, GET_CHARACTER_ByID, GET_COMICS_ByID, REMOVE_FAV, ADD_FAV } from './types'
import axios from 'axios';
import { URLSERVER } from '../../../../configURL';

export const getCharacters = () => {
    return async function (dispatch) {

        try {
            const { data } = await axios.get(`${URLSERVER}/characters`)

            return dispatch(
                {
                    type: GET_CHARACTERS,
                    payload: data.data.results
                }
            )
        } catch (error) {
            window.alert(error.message)
        }
    }

}

export const getCharacterById = (id) => {
    return async function (dispatch) {

        if (id === "") {
            console.log("holaa")
            return dispatch({
                type: GET_CHARACTER_ByID,
                payload: {}
            }
            )
        }

        try {
            const { data } = await axios.get(`${URLSERVER}/characters/${id}`)
            return dispatch(
                {
                    type: GET_CHARACTER_ByID,
                    payload: data
                }
            )
        } catch (error) {
            window.alert(error.message)
        }
    }
}

export const getCharacterComics = (id) => {
    return async function (dispatch) {

        if (id === "") {
            return dispatch({

                type: GET_COMICS_ByID,
                payload: []

            })
        }

        try {
            const { data } = await axios.get(`${URLSERVER}/characters/${id}/comics`)

            return dispatch(
                {
                    type: GET_COMICS_ByID,
                    payload: data
                }
            )
        } catch (error) {

            return dispatch({

                type: GET_COMICS_ByID,
                payload: [{ title: "No se encontraron comics... :(" }]

            })

        }
    }


}

export const addFav = (char) => {
    
    return async function (dispatch) {
        console.log(char)
        try {
            const { data } = await axios.post(`${URLSERVER}/favorite/fav`, char)

            return dispatch(
                {
                    type: ADD_FAV,
                    payload: data
                }
            )
        } catch (error) { window.alert(error.message) }
    }
}

export const removeFav = (id) => {
    console.log("true")
    return async (dispatch) => {
        try {
            const { data } = await axios.delete(`${URLSERVER}/favorite/fav/${id}`)
            return dispatch({
                type: REMOVE_FAV,
                payload: data
            })
        } catch (error) { window.alert(error.message) }
    }
}