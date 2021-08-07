import {
  FORGOT_PASSWORD_FAILED,
  FORGOT_PASSWORD_REQUEST,
  FORGOT_PASSWORD_SUCCESS,
  FORGOT_PASSWORD_TO_INITIAL,
  TForgotPasswordActions,
} from "../actions/forgot-password";

type TInitialState = {
  isLoading: boolean;
  hasError: boolean;
  successfullySendCode: boolean;
};

const forgotPasswordInitialState = {
  isLoading: false,
  hasError: false,
  successfullySendCode: false,
};

export const forgotPasswordReducer = (
  state = forgotPasswordInitialState,
  action: TForgotPasswordActions
): TInitialState => {
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
