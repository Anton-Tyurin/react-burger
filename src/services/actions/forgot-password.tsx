import { executePostRequest } from "../executeRequest";
import { POST_PASSWORD_RESTORE_URL } from "../../constants/constants";
import {AppDispatch, AppThunk} from "../../types/types";

export const FORGOT_PASSWORD_REQUEST: "FORGOT_PASSWORD_REQUEST" =
  "FORGOT_PASSWORD_REQUEST";
export const FORGOT_PASSWORD_SUCCESS: "FORGOT_PASSWORD_SUCCESS" =
  "FORGOT_PASSWORD_SUCCESS";
export const FORGOT_PASSWORD_FAILED: "FORGOT_PASSWORD_FAILED" =
  "FORGOT_PASSWORD_FAILED";
export const FORGOT_PASSWORD_TO_INITIAL: "FORGOT_PASSWORD_TO_INITIAL" =
  "FORGOT_PASSWORD_TO_INITIAL";

export interface IForgotPasswordRequest {
  readonly type: typeof FORGOT_PASSWORD_REQUEST;
}

export interface IForgotPasswordSuccess{
  readonly type: typeof FORGOT_PASSWORD_SUCCESS;
}

export interface IForgotPasswordFailed {
  readonly type: typeof FORGOT_PASSWORD_FAILED;
}

export interface IForgotPasswordToInitial {
  readonly type: typeof FORGOT_PASSWORD_TO_INITIAL;
}

export type TForgotPasswordActions =
    | IForgotPasswordRequest
    | IForgotPasswordSuccess
    | IForgotPasswordFailed
    | IForgotPasswordToInitial;

export const requestPasswordCode: AppThunk = (email: string) => {
  return async function(dispatch: AppDispatch) {
    dispatch({
      type: FORGOT_PASSWORD_REQUEST,
    });
    return await executePostRequest(POST_PASSWORD_RESTORE_URL, {
      email,
    })
      .then((data) => {
        if (!data?.success) {
          throw new Error(data?.message);
        }
        if (data?.success) {
          dispatch({
            type: FORGOT_PASSWORD_SUCCESS,
          });
        }
      })
      .catch((err) => {
        dispatch({
          type: FORGOT_PASSWORD_FAILED,
        });
        console.error(err);
      });
  };
};
