import Axios from "axios";
import { GET_POKEMONS, LOADING, ERROR } from '../types/pokemons';

export const getPokemons = () => async dispatch => {
    const API = 'https://pokeapi.co/api/v2/pokemon?offset=20&limit=20';
    dispatch({
        type: LOADING
    });
    try{
        const response = await fetch(API);
        const data = await response.json();
        dispatch({
            type: GET_POKEMONS,
            payload: [data.results]
        });
    }
    catch (error){
        console.log('Error:', error.message);
        dispatch({
            type: ERROR,
            payload: error.message
        });
    }
};
