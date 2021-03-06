import { executePostRequest } from "../executeRequest";
import {
  POST_LOGIN_URL,
  POST_LOGOUT_URL,
  POST_TOKEN_URL,
} from "../../constants/constants";
import { deleteCookie, getCookie, setCookies } from "../../utils/cookie";
import { AppDispatch, AppThunk } from "../../types/types";

export const LOGIN_SUCCESS: "LOGIN_SUCCESS" = "LOGIN_SUCCESS";
export const LOGIN_FAILED: "LOGIN_FAILED" = "LOGIN_FAILED";
export const LOGOUT_SUCCESS: "LOGOUT_SUCCESS" = "LOGOUT_SUCCESS";
export const LOGOUT_FAILED: "LOGOUT_FAILED" = "LOGOUT_FAILED";
export const AUTH_TO_INITIAL: "AUTH_TO_INITIAL" = "AUTH_TO_INITIAL";

export interface ILoginSuccess {
  readonly type: typeof LOGIN_SUCCESS;
}
export interface ILoginFailed {
  readonly type: typeof LOGIN_FAILED;
}
export interface ILogoutSuccess {
  readonly type: typeof LOGOUT_SUCCESS;
}
export interface ILogoutFailed {
  readonly type: typeof LOGOUT_FAILED;
}
export interface IAuthToInitial {
  readonly type: typeof AUTH_TO_INITIAL;
}

export type TAuthActions =
  | ILoginSuccess
  | ILoginFailed
  | ILogoutSuccess
  | ILogoutFailed
  | IAuthToInitial;

export const loginUser: AppThunk = (password: string, email: string) => {
  return async function(dispatch: AppDispatch) {
    return await executePostRequest(POST_LOGIN_URL, {
      password,
      email,
    })
      .then((data) => {
        if (!data?.success) {
          throw new Error(data?.message);
        }
        if (data?.accessToken) {
          setCookies(data);
          dispatch({
            type: LOGIN_SUCCESS,
          });
        }
      })
      .catch((err) => {
        dispatch({
          type: LOGIN_FAILED,
        });
        console.error(err);
      });
  };
};

export const logoutUser: AppThunk = () => {
  return async function(dispatch: AppDispatch) {
    const token = getCookie("refreshToken");
    return await executePostRequest(POST_LOGOUT_URL, {
      token,
    })
      .then((data) => {
        if (!data?.success) {
          throw new Error(data?.message);
        }
        deleteCookie("accessToken");
        deleteCookie("refreshToken");
        dispatch({
          type: LOGOUT_SUCCESS,
        });
      })
      .catch((err) => {
        dispatch({
          type: LOGOUT_FAILED,
        });
        console.error(err);
      });
  };
};

export const updateToken: () => Promise<void> = async () => {
  const token = getCookie("refreshToken");
  return await executePostRequest(POST_TOKEN_URL, {
    token,
  })
    .then((data) => {
      if (!data?.success) {
        throw new Error(data?.message);
      }
      if (data?.accessToken) {
        setCookies(data);
      }
    })
    .catch((err) => {
      console.error(err);
    });
};
