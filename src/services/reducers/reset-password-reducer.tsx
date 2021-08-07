import {
  RESET_PASSWORD_FAILED,
  RESET_PASSWORD_SUCCESS,
  RESET_PASSWORD_TO_INITIAL,
  TResetPasswordActions,
} from "../actions/reset-password";

type TInitialState = {
  successfullyChangedPassword: boolean;
  hasError: boolean;
};

const resetPasswordInitialState = {
  hasError: false,
  successfullyChangedPassword: false,
};

export const resetPasswordReducer = (
  state = resetPasswordInitialState,
  action: TResetPasswordActions
): TInitialState => {
  switch (action.type) {
    case RESET_PASSWORD_SUCCESS: {
      return {
        ...state,
        successfullyChangedPassword: true,
      };
    }
    case RESET_PASSWORD_FAILED: {
      return {
        ...state,
        hasError: true,
      };
    }
    case RESET_PASSWORD_TO_INITIAL: {
      return resetPasswordInitialState;
    }
    default:
      return state;
  }
};
