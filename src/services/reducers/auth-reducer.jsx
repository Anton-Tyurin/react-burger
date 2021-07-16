import {
  AUTH_TO_INITIAL,
  LOGIN_FAILED,
  LOGIN_SUCCESS,
  LOGOUT_FAILED,
  LOGOUT_SUCCESS,
} from "../actions/auth";
import { getCookie } from "../../utils/cookie";

const authInitialState = {
  hasLoginError: false,
  successfulLogin: false,

  hasLogoutError: false,
  successfulLogout: false,

  isLoggedIn: !!getCookie('accessToken'),
};

export const authReducer = (state = authInitialState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS: {
      return {
        ...state,
        successfulLogin: true,
        isLoggedIn: true,
      };
    }
    case LOGIN_FAILED: {
      return {
        ...state,
        hasLoginError: true,
      };
    }
    case LOGOUT_SUCCESS: {
      return {
        ...state,
        successfulLogout: true,
        isLoggedIn: false,
      };
    }
    case LOGOUT_FAILED: {
      return {
        ...state,
        hasLogoutError: true,
      };
    }
    case AUTH_TO_INITIAL: {
      return { ...authInitialState, isLoggedIn: state.isLoggedIn };
    }
    default:
      return state;
  }
};
