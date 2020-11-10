import { GET_POKEMONS, LOADING, ERROR } from '../types/pokemons';

const INITIAL_STATE = {
    pokemons: {},
    loading: false,
    error: ''
}

export default (state = INITIAL_STATE, action) =>  {
    switch (action.type) {
        case GET_POKEMONS:
            return { 
                ...state, 
                pokemons: action.payload,
                loading: false
            };
        case LOADING:
            return { 
                ...state, 
                loading: true
            };
        case ERROR:
            return { 
                ...state, 
                error: action.payload
            };            
        default: return state;
    }
}