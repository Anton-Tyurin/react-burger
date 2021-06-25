import { combineReducers } from "redux";
import { burgerIngredientsReducer } from "./burger-ingredients";
import { burgerConstructorReducer } from "./burger-constructor";
import { burgerActiveIngredientReducer } from "./ingredient-details";
import { orderDetailsReducer } from "./order-details";

export const rootReducer = combineReducers({
  burgerIngredientsReducer,
  burgerConstructorReducer,
  burgerActiveIngredientReducer,
  orderDetailsReducer,
});
