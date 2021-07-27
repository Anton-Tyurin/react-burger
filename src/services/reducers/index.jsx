import { combineReducers } from "redux";
import { burgerIngredientsReducer } from "./burger-ingredients";
import { burgerConstructorReducer } from "./burger-constructor";
import { burgerActiveIngredientReducer } from "./ingredient-details";
import { orderDetailsReducer } from "./order-details";
import { registerReducer } from "./register-reducer";
import { authReducer } from "./auth-reducer";
import { forgotPasswordReducer } from "./forgot-password-reducer";
import { resetPasswordReducer } from "./reset-password-reducer";
import { wsOrdersReducer } from "./ws-orders-reducer";

export const rootReducer = combineReducers({
  burgerIngredientsReducer,
  burgerConstructorReducer,
  burgerActiveIngredientReducer,
  orderDetailsReducer,
  registerReducer,
  authReducer,
  forgotPasswordReducer,
  resetPasswordReducer,
  wsOrdersReducer,
});
