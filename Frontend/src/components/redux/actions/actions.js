import {GET_CHARACTERS} from './types'
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