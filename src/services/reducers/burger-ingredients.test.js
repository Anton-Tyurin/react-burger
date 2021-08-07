import {
  burgerIngredientsInitialState,
  burgerIngredientsReducer,
} from "./burger-ingredients";
import {
  BURGER_INGREDIENTS_FAILED,
  BURGER_INGREDIENTS_REQUEST,
  BURGER_INGREDIENTS_SUCCESS,
} from "../actions/burger-ingredients";
import { mockIngredientsData } from "../../utils/data";

describe("burger ingredients reducer", () => {
  it("should return initial state", () => {
    expect(burgerIngredientsReducer(undefined, {})).toEqual(
      burgerIngredientsInitialState
    );
  });
  it("should request ingredients", () => {
    expect(
      burgerIngredientsReducer(burgerIngredientsInitialState, {
        type: BURGER_INGREDIENTS_REQUEST,
      })
    ).toEqual(
      expect.objectContaining({
        isLoading: true,
      })
    );
  });
  it("should catch an error", () => {
    expect(
      burgerIngredientsReducer(burgerIngredientsInitialState, {
        type: BURGER_INGREDIENTS_FAILED,
      })
    ).toEqual(
      expect.objectContaining({
        hasError: true,
      })
    );
  });
  it("should return items", () => {
    expect(
      burgerIngredientsReducer(burgerIngredientsInitialState, {
        type: BURGER_INGREDIENTS_SUCCESS,
        ingredientsData: mockIngredientsData,
      })
    ).toEqual(
      expect.objectContaining({
        ingredientsData: mockIngredientsData,
        hasError: false,
        isLoading: false,
      })
    );
  });
});
