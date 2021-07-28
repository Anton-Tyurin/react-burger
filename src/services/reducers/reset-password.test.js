import {
  resetPasswordInitialState,
  resetPasswordReducer,
} from "./reset-password-reducer";
import {
  RESET_PASSWORD_FAILED,
  RESET_PASSWORD_SUCCESS,
  RESET_PASSWORD_TO_INITIAL,
} from "../actions/reset-password";

describe("reset password reducer", () => {
  it("should return initial state", () => {
    expect(resetPasswordReducer(undefined, {})).toEqual(
      resetPasswordInitialState
    );
  });
  it("should set successfullyChangedPassword: true", () => {
    expect(
      resetPasswordReducer(resetPasswordInitialState, {
        type: RESET_PASSWORD_SUCCESS,
      })
    ).toEqual(
      expect.objectContaining({
        successfullyChangedPassword: true,
      })
    );
  });
  it("should catch an error", () => {
    expect(
      resetPasswordReducer(resetPasswordInitialState, {
        type: RESET_PASSWORD_FAILED,
      })
    ).toEqual(
      expect.objectContaining({
        hasError: true,
      })
    );
  });
  it("should set initial state", () => {
    expect(
      resetPasswordReducer(resetPasswordInitialState, {
        type: RESET_PASSWORD_TO_INITIAL,
      })
    ).toEqual(resetPasswordInitialState);
  });
});
