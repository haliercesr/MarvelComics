import { GET_CHARACTERS, GET_CHARACTER_ByID, GET_COMICS_ByID } from './types'
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
                    payload: [{title:"No se encontraron comics... :("}]
    
                })
            
        }
    }

}