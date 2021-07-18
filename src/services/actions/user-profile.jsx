import { executeGetRequest, executePatchRequest } from "../executeRequest";
import {
  AUTH_TOKEN_EXPIRED_MESSAGE,
  GET_PATCH_USER_DATA_URL,
} from "../../constants/constants";
import { getCookie } from "../../utils/cookie";
import { updateToken } from "./auth";

export const USER_DATA_GET_SUCCESS = "USER_DATA_GET_SUCCESS";
export const USER_DATA_GET_FAILED = "USER_DATA_GET_FAILED";
export const USER_DATA_PATCH_SUCCESS = "USER_DATA_PATCH_SUCCESS";
export const USER_DATA_PATCH_FAILED = "USER_DATA_PATCH_FAILED";
export const USER_TO_INITIAL = "USER_TO_INITIAL";

export const getUserCredentials = () => {
  const token = "Bearer " + getCookie("accessToken");
  return async function(dispatch) {
    return await executeGetRequest(GET_PATCH_USER_DATA_URL, {
      Authorization: token,
    })
      .then((data) => {
        if (!data?.success && data?.message !== AUTH_TOKEN_EXPIRED_MESSAGE) {
          throw new Error(data?.message);
        }
        if (data?.message === AUTH_TOKEN_EXPIRED_MESSAGE) {
          return updateToken()
            .then(() => dispatch(getUserCredentials()))
            .catch((e) => console.error(e));
        }
        dispatch({
          type: USER_DATA_GET_SUCCESS,
        });
        return data?.user;
      })
      .catch((err) => {
        dispatch({
          type: USER_DATA_GET_FAILED,
        });
        console.error(err);
      });
  };
};

export const updateUserCredentials = (updatedFields) => {
  const token = "Bearer " + getCookie("accessToken");
  return async function(dispatch) {
    return await executePatchRequest(GET_PATCH_USER_DATA_URL, updatedFields, {
      Authorization: token,
    })
      .then((data) => {
        if (!data?.success && data?.message !== AUTH_TOKEN_EXPIRED_MESSAGE) {
          throw new Error(data?.message);
        }
        if (data?.message === AUTH_TOKEN_EXPIRED_MESSAGE) {
          return updateToken()
            .then(() => dispatch(getUserCredentials()))
            .catch((e) => console.error(e));
        }
        dispatch({
          type: USER_DATA_PATCH_SUCCESS,
        });
        return data?.user;
      })
      .catch((err) => {
        dispatch({
          type: USER_DATA_PATCH_FAILED,
        });
        console.error(err);
      });
  };
};
