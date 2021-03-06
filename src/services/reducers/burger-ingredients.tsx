import {
  BURGER_INGREDIENTS_FAILED,
  BURGER_INGREDIENTS_REQUEST,
  BURGER_INGREDIENTS_SUCCESS,
  TIngredientsActions,
} from "../actions/burger-ingredients";
import { TBurgerIngredient } from "../../types/types";

type TInitialState = {
  ingredientsData: TBurgerIngredient[];
  isLoading: boolean;
  hasError: boolean;
};

export const burgerIngredientsInitialState = {
  ingredientsData: [],
  isLoading: false,
  hasError: false,
};

export const burgerIngredientsReducer = (
  state = burgerIngredientsInitialState,
  action: TIngredientsActions
): TInitialState => {
  switch (action.type) {
    case BURGER_INGREDIENTS_REQUEST:
      return { ...state, isLoading: true };
    case BURGER_INGREDIENTS_SUCCESS:
      return {
        ...state,
        ingredientsData: action.ingredientsData,
        isLoading: false,
      }
    case BURGER_INGREDIENTS_FAILED:
      return { ...state, isLoading: false, hasError: true };
    default:
      return state;
  }
};
