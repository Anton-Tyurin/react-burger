import { GET_INGREDIENTS_URL } from "../../constants/constants";
import { AppDispatch, AppThunk, TBurgerIngredient } from "../../types/types";

export const BURGER_INGREDIENTS_REQUEST: "BURGER_INGREDIENTS_REQUEST" =
  "BURGER_INGREDIENTS_REQUEST";
export const BURGER_INGREDIENTS_SUCCESS: "BURGER_INGREDIENTS_SUCCESS" =
  "BURGER_INGREDIENTS_SUCCESS";
export const BURGER_INGREDIENTS_FAILED: "BURGER_INGREDIENTS_FAILED" =
  "BURGER_INGREDIENTS_FAILED";

export interface IIngredientsRequest {
  readonly type: typeof BURGER_INGREDIENTS_REQUEST;
}

export interface IIngredientsSuccess {
  readonly type: typeof BURGER_INGREDIENTS_SUCCESS;
  ingredientsData: TBurgerIngredient[];
}

export interface IIngredientsFailed {
  readonly type: typeof BURGER_INGREDIENTS_FAILED;
}

export type TIngredientsActions =
  | IIngredientsRequest
  | IIngredientsSuccess
  | IIngredientsFailed;

export const getBurgerIngredients: AppThunk = () => {
  return function(dispatch: AppDispatch) {
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
};
