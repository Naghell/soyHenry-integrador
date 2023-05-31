import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from './actions-types';

const initialState = {
    myFav: [],
    allCharacters: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_FAV:
            return { ...state, myFav: action.payload, allCharacters: action.payload };
        case REMOVE_FAV: {
            const updatedFavorites = state.myFav.filter(fav => fav.id !== action.payload);
            return {
            ...state,
            myFav: updatedFavorites,
            };
        }
        case FILTER:
            const allCharactersFiltered = state.allCharacters.filter(character => character.gender === action.payload)
            return {
                ...state,
                myFav:
                    action.payload === 'All' ? [...state.myFav] : allCharactersFiltered
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