import {
  forgotPasswordInitialState,
  forgotPasswordReducer,
} from "./forgot-password-reducer";
import {
  FORGOT_PASSWORD_FAILED,
  FORGOT_PASSWORD_REQUEST,
  FORGOT_PASSWORD_SUCCESS,
  FORGOT_PASSWORD_TO_INITIAL,
} from "../actions/forgot-password";

describe("forgot password reducer", () => {
  it("should return initial state", () => {
    expect(forgotPasswordReducer(undefined, {})).toEqual(
      forgotPasswordInitialState
    );
  });
  it("should request ingredients", () => {
    expect(
      forgotPasswordReducer(forgotPasswordInitialState, {
        type: FORGOT_PASSWORD_REQUEST,
      })
    ).toEqual(
      expect.objectContaining({
        isLoading: true,
      })
    );
  });
  it("should catch an error", () => {
    expect(
      forgotPasswordReducer(forgotPasswordInitialState, {
        type: FORGOT_PASSWORD_FAILED,
      })
    ).toEqual(
      expect.objectContaining({
        hasError: true,
      })
    );
  });
  it("should return successfullySendCode: true", () => {
    expect(
      forgotPasswordReducer(forgotPasswordInitialState, {
        type: FORGOT_PASSWORD_SUCCESS,
      })
    ).toEqual(
      expect.objectContaining({
        isLoading: false,
        successfullySendCode: true,
      })
    );
  });
  it("should return initialState", () => {
    expect(
      forgotPasswordReducer(forgotPasswordInitialState, {
        type: FORGOT_PASSWORD_TO_INITIAL,
      })
    ).toEqual(forgotPasswordInitialState);
  });
});
