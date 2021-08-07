import {
  TUserDataActions,
  USER_DATA_GET_FAILED,
  USER_DATA_GET_SUCCESS,
  USER_DATA_PATCH_FAILED,
  USER_DATA_PATCH_SUCCESS,
  USER_TO_INITIAL,
} from "../actions/user-profile";

type TInitialState = {
  successfullyGetCredentials: boolean;
  hasGetError: boolean;

  successfullyChangedCredentials: boolean;
  hasPatchError: boolean;
};

const userProfileInitialState = {
  hasGetError: false,
  successfullyGetCredentials: false,

  hasPatchError: false,
  successfullyChangedCredentials: false,
};

export const userProfileReducer = (
  state = userProfileInitialState,
  action: TUserDataActions
): TInitialState => {
  switch (action.type) {
    case USER_DATA_GET_SUCCESS: {
      return {
        ...state,
        successfullyGetCredentials: true,
      };
    }
    case USER_DATA_GET_FAILED: {
      return {
        ...state,
        hasGetError: false,
      };
    }
    case USER_DATA_PATCH_SUCCESS: {
      return {
        ...state,
        successfullyChangedCredentials: true,
      };
    }
    case USER_DATA_PATCH_FAILED: {
      return {
        ...state,
        hasPatchError: false,
      };
    }
    case USER_TO_INITIAL: {
      return userProfileInitialState;
    }
    default:
      return state;
  }
};
