import axios from "axios";
import {ADD_FAV, REMOVE_FAV, FILTER, ORDER} from './actions-types';
const endpoint = 'http://localhost:3001/rickandmorty/fav/'

export const addFav = (character) => {
   return async (dispatch) => {
      try {
         const {data} = await axios.post(endpoint, character);

         if (!data.length) throw Error('No hay favoritos')

         return dispatch({
            type: ADD_FAV,
            payload: data
         });

      } catch (error) {
         console.log(error.message);
      }

   }
};
 
export const removeFav = (id) => {
   const url = endpoint + id;
   return async (dispatch) => {
      try {
         const {data} = await axios.delete(url)

         return dispatch({
            type: REMOVE_FAV,
            payload: id
         });      

      } catch (error) {
         console.log(error.message);
      }
   };
};

export const filterCards = (gender) => {
    return {
        type: FILTER,
        payload: gender
    }
}

export const orderCards = (order) => {
    return {
        type: ORDER,
        payload: order
    }
}
