import {ADD_FAV, REMOVE_FAV, FILTER, ORDER} from './actions-types';

export const addFav = (character) => {
    const endpoint = 'http://localhost:3001/rickandmorty/fav';
    return (dispatch) => {
       fetch(endpoint, {
          method: 'POST',
          headers: {
             'Content-Type': 'application/json'
          },
          body: JSON.stringify(character)
       })
       .then((response) => response.json())
       .then((data) => {
          dispatch({
             type: ADD_FAV,
             payload: data
          });
       });
    };
 };
 
 export const removeFav = (id) => {
    const endpoint = `http://localhost:3001/rickandmorty/fav/${id}`;
    return (dispatch) => {
       fetch(endpoint, {
          method: 'DELETE'
       })
       .then((response) => response.json())
       .then((data) => {
          dispatch({
             type: REMOVE_FAV,
             payload: data
          });
       });
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
