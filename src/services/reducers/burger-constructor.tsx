import {
  BURGER_CONSTRUCTOR_UPDATE,
  BURGER_CONSTRUCTOR_DELETE_ALL,
  TConstructorActions,
} from "../actions/burger-constructor";
import { TBurgerIngredient } from "../../types/types";

type TInitialState = {
  constructorBunsType: string | null;
  constructorIngredients: TBurgerIngredient[];
};

export const burgerConstructorInitialState = {
  constructorBunsType: null,
  constructorIngredients: [],
};

export const burgerConstructorReducer = (
  state = burgerConstructorInitialState,
  action: TConstructorActions
): TInitialState => {
  switch (action.type) {
    case BURGER_CONSTRUCTOR_UPDATE: {
      return {
        ...state,
        ...action.updatedConstructor,
      };
    }
    case BURGER_CONSTRUCTOR_DELETE_ALL: {
      return {
        constructorBunsType: null,
        constructorIngredients: [],
      };
    }
    default:
      return state;
  }
};
