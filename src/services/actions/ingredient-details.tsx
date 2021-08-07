import { TBurgerIngredient } from "../../types/types";

export const INGREDIENT_DETAILS_SET_DATA: "INGREDIENT_DETAILS_SET_DATA" =
  "INGREDIENT_DETAILS_SET_DATA";
export const INGREDIENT_DETAILS_CLEAR_DATA: "INGREDIENT_DETAILS_CLEAR_DATA" =
  "INGREDIENT_DETAILS_CLEAR_DATA";

export interface IIngredientDetailsSetData {
  readonly type: typeof INGREDIENT_DETAILS_SET_DATA;
  activeIngredient: TBurgerIngredient;
}

export interface IIngredientDetailsClearData {
  readonly type: typeof INGREDIENT_DETAILS_CLEAR_DATA;
}

export type TIngredientDetailsActions =
  | IIngredientDetailsSetData
  | IIngredientDetailsClearData;
