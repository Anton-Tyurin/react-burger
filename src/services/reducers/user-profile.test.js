import {
  userProfileInitialState,
  userProfileReducer,
} from "./user-profile-reducer";
import {
  USER_DATA_GET_FAILED,
  USER_DATA_GET_SUCCESS, USER_DATA_PATCH_FAILED, USER_DATA_PATCH_SUCCESS,
  USER_TO_INITIAL,
} from "../actions/user-profile";

describe("user profile reducer", () => {
  it("should return initial state", () => {
    expect(userProfileReducer(undefined, {})).toEqual(userProfileInitialState);
  });
  it("should set successfullyGetCredentials: true", () => {
    expect(
      userProfileReducer(userProfileInitialState, {
        type: USER_DATA_GET_SUCCESS,
      })
    ).toEqual(
      expect.objectContaining({
        successfullyGetCredentials: true,
      })
    );
  });
  it("should catch a hasGetError error", () => {
    expect(
      userProfileReducer(userProfileInitialState, {
        type: USER_DATA_GET_FAILED,
      })
    ).toEqual(
      expect.objectContaining({
        hasGetError: true,
      })
    );
  });
  it("should set successfullyChangedCredentials: true", () => {
    expect(
      userProfileReducer(userProfileInitialState, {
        type: USER_DATA_PATCH_SUCCESS,
      })
    ).toEqual(
      expect.objectContaining({
        successfullyChangedCredentials: true,
      })
    );
  });
  it("should catch a hasPatchError error", () => {
    expect(
      userProfileReducer(userProfileInitialState, {
        type: USER_DATA_PATCH_FAILED,
      })
    ).toEqual(
      expect.objectContaining({
        hasPatchError: true,
      })
    );
  });
  it("should set initial state", () => {
    expect(
      userProfileReducer(userProfileInitialState, {
        type: USER_TO_INITIAL,
      })
    ).toEqual(userProfileInitialState);
  });
});
