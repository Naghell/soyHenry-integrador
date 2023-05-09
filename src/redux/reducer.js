import { ADD_FAV, REMOVE_FAV } from './actions-types';

const initialState = {
    myFav: []

}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_FAV:
            return {...state,
                myFav: [...state.myFav, action.payload]
            }
        case REMOVE_FAV:
            return {...state,
                myFav: state.myFav.filter(fav => fav.id !== action.payload)
                }
        default:
            return {...state}
    }

}

export default reducer;