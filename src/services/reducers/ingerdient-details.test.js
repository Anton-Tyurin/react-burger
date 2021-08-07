import {
  burgerActiveIngredientInitialState,
  burgerActiveIngredientReducer,
} from "./ingredient-details";
import { mockIngredientsData } from "../../utils/data";
import {
  INGREDIENT_DETAILS_CLEAR_DATA,
  INGREDIENT_DETAILS_SET_DATA,
} from "../actions/ingredient-details";

describe("burger ingredient details reducer", () => {
  it("should return initial state", () => {
    expect(burgerActiveIngredientReducer(undefined, {})).toEqual(
      burgerActiveIngredientInitialState
    );
  });
  it("should return active ingredient", () => {
    expect(
      burgerActiveIngredientReducer(burgerActiveIngredientInitialState, {
        type: INGREDIENT_DETAILS_SET_DATA,
        activeIngredient: mockIngredientsData[0],
      })
    ).toEqual(
      expect.objectContaining({
        activeIngredient: mockIngredientsData[0],
      })
    );
  });
  it("should clear data of active ingredient", () => {
    expect(
      burgerActiveIngredientReducer(burgerActiveIngredientInitialState, {
        type: INGREDIENT_DETAILS_CLEAR_DATA,
      })
    ).toEqual(
      expect.objectContaining({
        activeIngredient: null,
      })
    );
  });
});
