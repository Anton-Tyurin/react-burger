import {GET_INGREDIENTS_URL} from "../../constants/constants";

export const BURGER_INGREDIENTS_REQUEST = 'BURGER_INGREDIENTS_REQUEST';
export const BURGER_INGREDIENTS_SUCCESS = 'BURGER_INGREDIENTS_SUCCESS';
export const BURGER_INGREDIENTS_FAILED = 'BURGER_INGREDIENTS_FAILED';

export function getBurgerIngredients() {
  return function(dispatch) {
    dispatch({
      type: BURGER_INGREDIENTS_REQUEST,
    });
    fetch(GET_INGREDIENTS_URL)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(res.status);
      })
      .then((res) => {
        dispatch({
          type: BURGER_INGREDIENTS_SUCCESS,
          ingredientsData: res.data,
        });
      })
      .catch((e) => {
        dispatch({
          type: BURGER_INGREDIENTS_FAILED,
        });
        console.error("error during request:", e);
      });
  };
}