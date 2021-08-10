import {
  TypedUseSelectorHook,
  useSelector as selectorHook,
  useDispatch as dispatchHook,
} from "react-redux";
import { store } from "../services";
import { Action, ActionCreator } from "redux";
import { ThunkAction } from "redux-thunk";
import { TAuthActions } from "../services/actions/auth";
import { TConstructorActions } from "../services/actions/burger-constructor";
import { TIngredientsActions } from "../services/actions/burger-ingredients";
import { TWSConnectionActions } from "../services/actions/feed-socket";
import { TForgotPasswordActions } from "../services/actions/forgot-password";
import { TIngredientDetailsActions } from "../services/actions/ingredient-details";
import { TOrderNumberActions } from "../services/actions/order-details";
import { TRegisterActions } from "../services/actions/register";
import { TResetPasswordActions } from "../services/actions/reset-password";
import { TUserDataActions } from "../services/actions/user-profile";
import { rootReducer } from "../services/reducers";

export type RootState = ReturnType<typeof rootReducer>;

export type TAppActions =
  | TAuthActions
  | TConstructorActions
  | TIngredientsActions
  | TWSConnectionActions
  | TForgotPasswordActions
  | TIngredientDetailsActions
  | TOrderNumberActions
  | TRegisterActions
  | TResetPasswordActions
  | TUserDataActions;

export type AppThunk<TReturn = void> = ActionCreator<
  ThunkAction<TReturn, Action, RootState, TAppActions>
>;
export type AppDispatch = typeof store.dispatch;

export const useSelector: TypedUseSelectorHook<RootState> = selectorHook;
export const useDispatch = () => dispatchHook<AppDispatch | AppThunk>();

export type TDropIngredient = {
  item: TBurgerIngredient;
  index: number;
};

export type TBurgerIngredient = {
  _id: string;
  name: string;
  type: string;
  proteins: number;
  fat: number;
  carbohydrates: number;
  calories: number;
  price: number;
  image: string;
  image_mobile: string;
  image_large: string;
  __v: number;
  unquieKey?: string;
};

export type TBurgerOrder = {
  status: string;
  _id: string;
  number: number | string;
  id: number;
  ingredients: Array<string>;
  name: string;
  createdAt: string;
  price: number;
  image: string;
  calories: number;
  proteins: number;
  fat: number;
  carbohydrates?: number;
};

export type TUser = {
  name: string;
  email: string;
  password?: string;
};

export type TLocationItem = {
  hash: string;
  key: string;
  pathname: string;
  search: string;
  state: null;
};

export type TLocation = {
  hash: string;
  key: string;
  pathname: string;
  from: TLocationItem;
  search: string;
  state: { background: TLocationItem; header?: string } | null;
  background: TLocationItem;
  header?: string;
};
