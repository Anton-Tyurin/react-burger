import {
  INGREDIENT_DETAILS_CLEAR_DATA,
  INGREDIENT_DETAILS_SET_DATA,
  TIngredientDetailsActions,
} from "../actions/ingredient-details";
import { TBurgerIngredient } from "../../types/types";

type TInitialState = {
  activeIngredient: TBurgerIngredient | null;
};

export const burgerActiveIngredientInitialState = {
  activeIngredient: null,
};

export const burgerActiveIngredientReducer = (
  state = burgerActiveIngredientInitialState,
  action: TIngredientDetailsActions
): TInitialState => {
  switch (action.type) {
    case INGREDIENT_DETAILS_SET_DATA: {
      return {
        activeIngredient: action.activeIngredient,
      };
    }
    case INGREDIENT_DETAILS_CLEAR_DATA: {
      return {
        activeIngredient: null,
      };
    }
    default:
      return state;
  }
};
