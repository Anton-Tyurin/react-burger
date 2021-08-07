import {
  FORGOT_PASSWORD_FAILED,
  FORGOT_PASSWORD_REQUEST,
  FORGOT_PASSWORD_SUCCESS,
  FORGOT_PASSWORD_TO_INITIAL,
} from "../actions/forgot-password";

export const forgotPasswordInitialState = {
  isLoading: false,
  hasError: false,
  successfullySendCode: false,
};

export const forgotPasswordReducer = (state = forgotPasswordInitialState, action) => {
  switch (action.type) {
    case FORGOT_PASSWORD_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case FORGOT_PASSWORD_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        successfullySendCode: true,
      };
    }
    case FORGOT_PASSWORD_FAILED: {
      return {
        ...state,
        isLoading: false,
        hasError: true,
      };
    }
    case FORGOT_PASSWORD_TO_INITIAL: {
      return forgotPasswordInitialState;
    }
    default:
      return state;
  }
};
