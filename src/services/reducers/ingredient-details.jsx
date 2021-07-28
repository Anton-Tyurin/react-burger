import {
  INGREDIENT_DETAILS_CLEAR_DATA,
  INGREDIENT_DETAILS_SET_DATA,
} from "../actions/ingredient-details";

export const burgerActiveIngredientInitialState = {
  activeIngredient: null,
};

export const burgerActiveIngredientReducer = (
  state = burgerActiveIngredientInitialState,
  action
) => {
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
