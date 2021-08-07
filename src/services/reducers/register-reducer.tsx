import {
  REGISTER_FAILED,
  REGISTER_SUCCESS,
  REGISTER_TO_INITIAL, TRegisterActions,
} from "../actions/register";

type TInitialState = {
  successfulRegistration: boolean;
  hasError: boolean;
};

export const registerInitialState = {
  hasError: false,
  successfulRegistration: false,
};

export const registerReducer = (
  state = registerInitialState,
  action: TRegisterActions
): TInitialState => {
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
