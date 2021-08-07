import {
  REGISTER_FAILED,
  REGISTER_SUCCESS,
  REGISTER_TO_INITIAL,
} from "../actions/register";

export const registerInitialState = {
  hasError: false,
  successfulRegistration: false,
};

export const registerReducer = (state = registerInitialState, action) => {
  switch (action.type) {
    case REGISTER_SUCCESS: {
      return {
        ...state,
        successfulRegistration: true,
      };
    }
    case REGISTER_FAILED: {
      return {
        ...state,
        hasError: true,
      };
    }
    case REGISTER_TO_INITIAL: {
      return registerInitialState;
    }
    default:
      return state;
  }
};
