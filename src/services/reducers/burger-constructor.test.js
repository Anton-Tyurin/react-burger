import {
  burgerConstructorInitialState,
  burgerConstructorReducer,
} from "./burger-constructor";
import {
  BURGER_CONSTRUCTOR_DELETE_ALL,
  BURGER_CONSTRUCTOR_UPDATE,
} from "../actions/burger-constructor";
import { mockIngredientsData } from "../../utils/data";

describe("burger constructor reducer", () => {
  it("should return initial state", () => {
    expect(burgerConstructorReducer(undefined, {})).toEqual(
      burgerConstructorInitialState
    );
  });
  it("should return updated constructor data", () => {
    expect(
      burgerConstructorReducer(burgerConstructorInitialState, {
        type: BURGER_CONSTRUCTOR_UPDATE,
        updatedConstructor: {
          constructorBunsType: mockIngredientsData[0],
        },
      })
    ).toEqual(
      expect.objectContaining({
        constructorBunsType: mockIngredientsData[0],
      })
    );
  });
  it("should clear constructor data", () => {
    expect(
      burgerConstructorReducer(burgerConstructorInitialState, {
        type: BURGER_CONSTRUCTOR_DELETE_ALL,
      })
    ).toEqual(
      expect.objectContaining({
        constructorBunsType: null,
        constructorIngredients: [],
      })
    );
  });
});
