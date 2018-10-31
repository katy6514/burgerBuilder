//action creator file

import * as actionTypes from './actionTypes';

//dispatched from burger builder container
export const addIngredient = (name) => {
  return {
    type: actionTypes.ADD_INGREDIENT,
    ingredientName: name
  };
};

export const removeIngredient = (name) => {
  return {
    type: actionTypes.REMOVE_INGREDIENT,
    ingredientName: name
  };
};

// synchronous action creator,
// will dispatch when the async action (initIngredients) is done
export const setIngredients = (ingredients) => {
  return {
    type: actionTypes.SET_INGREDIENTS,
    ingredients: ingredients
  };
};

export const fetchIngredientsFailed = () => {
  return {
    type: actionTypes.FETCH_INGREDIENTS_FAILED
  };
};

//redux thunk allows this function structure
export const initIngredients = () => {
  return {
    type: actionTypes.INIT_INGREDIENTS
  };
};
