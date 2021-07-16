import {
  RESET_PASSWORD_FAILED,
  RESET_PASSWORD_SUCCESS,
  RESET_PASSWORD_TO_INITIAL,
} from "../actions/reset-password";

const resetPasswordInitialState = {
  hasError: false,
  successfullyChangedPassword: false,
};

export const resetPasswordReducer = (
  state = resetPasswordInitialState,
  action
) => {
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
