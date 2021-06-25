import {
  BURGER_CONSTRUCTOR_UPDATE,
  BURGER_CONSTRUCTOR_DELETE_ALL,
} from "../actions/burger-constructor";

const burgerConstructorInitialState = {
  constructorBunsType: null,
  constructorIngredients: [],
};

export const burgerConstructorReducer = (
  state = burgerConstructorInitialState,
  action
) => {
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
