import { registerInitialState, registerReducer } from "./register-reducer";
import {
  REGISTER_FAILED,
  REGISTER_SUCCESS,
  REGISTER_TO_INITIAL,
} from "../actions/register";

describe("register reducer", () => {
  it("should return initial state", () => {
    expect(registerReducer(undefined, {})).toEqual(registerInitialState);
  });
  it("should set successfulRegistration: true", () => {
    expect(
      registerReducer(registerInitialState, {
        type: REGISTER_SUCCESS,
      })
    ).toEqual(
      expect.objectContaining({
        successfulRegistration: true,
      })
    );
  });
  it("should catch an error", () => {
    expect(
      registerReducer(registerInitialState, {
        type: REGISTER_FAILED,
      })
    ).toEqual(
      expect.objectContaining({
        hasError: true,
      })
    );
  });
  it("should set initial state", () => {
    expect(
      registerReducer(registerInitialState, {
        type: REGISTER_TO_INITIAL,
      })
    ).toEqual(registerInitialState);
  });
});
