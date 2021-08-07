import { authInitialState, authReducer } from "./auth-reducer";
import {
  AUTH_TO_INITIAL,
  LOGIN_FAILED,
  LOGIN_SUCCESS,
  LOGOUT_FAILED,
  LOGOUT_SUCCESS,
} from "../actions/auth";

describe("auth reducer", () => {
  it("should return initial state", () => {
    expect(authReducer(undefined, {})).toEqual(authInitialState);
  });
  it("should return successful login fields", () => {
    expect(
      authReducer(authInitialState, {
        type: LOGIN_SUCCESS,
      })
    ).toEqual(
      expect.objectContaining({
        successfulLogin: true,
        isLoggedIn: true,
      })
    );
  });
  it("should return unsuccessful login fields", () => {
    expect(
      authReducer(authInitialState, {
        type: LOGIN_FAILED,
      })
    ).toEqual(
      expect.objectContaining({
        hasLoginError: true,
      })
    );
  });
  it("should return successful logout fields", () => {
    expect(
      authReducer(authInitialState, {
        type: LOGOUT_SUCCESS,
      })
    ).toEqual(
      expect.objectContaining({
        successfulLogout: true,
        isLoggedIn: false,
      })
    );
  });
  it("should return unsuccessful logout fields", () => {
    expect(
      authReducer(authInitialState, {
        type: LOGOUT_FAILED,
      })
    ).toEqual(
      expect.objectContaining({
        hasLogoutError: true,
      })
    );
  });
  it("should return initial auth state except isLogged", () => {
    const mockedStore = {
      hasLoginError: true,
      successfulLogin: false,

      hasLogoutError: false,
      successfulLogout: true,

      isLoggedIn: true,
    };
    expect(
      authReducer(mockedStore, {
        type: AUTH_TO_INITIAL,
      })
    ).toEqual(
      expect.objectContaining({
        ...authInitialState,
        isLoggedIn: mockedStore.isLoggedIn,
      })
    );
  });
});
