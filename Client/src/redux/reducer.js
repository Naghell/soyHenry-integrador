import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from './actions-types';

const initialState = {
    myFav: [],
    allCharacters: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_FAV:
            return { ...state, myFav: action.payload, allCharacters: action.payload };
        case REMOVE_FAV:
            return { ...state, myFav: action.payload }
        case FILTER:
            const allCharactersFiltered = state.allCharacters.filter(character => character.gender === action.payload)
            return {
                ...state,
                myFav:
                    action.payload === 'All' ? [...state.allCharacters] : allCharactersFiltered
            }
        case ORDER:
            const allCharactersOrdered = [...state.allCharacters]
            return {
                ...state,
                myFav:
                    action.payload === 'A' ? allCharactersOrdered.sort((a, b) => a.id - b.id) : allCharactersOrdered.sort((a, b) => b.id - a.id)               
            }
        default:
            return {...state}
    }

}

export default reducer;