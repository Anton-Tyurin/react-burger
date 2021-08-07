import { executePostRequest } from "../executeRequest";
import { POST_PASSWORD_RESTORE_RESET_URL } from "../../constants/constants";
import {AppDispatch, AppThunk} from "../../types/types";

export const RESET_PASSWORD_SUCCESS = "RESET_PASSWORD_SUCCESS";
export const RESET_PASSWORD_FAILED = "RESET_PASSWORD_FAILED";
export const RESET_PASSWORD_TO_INITIAL = "RESET_PASSWORD_TO_INITIAL";


export interface IResetPasswordSuccess {
    readonly type: typeof RESET_PASSWORD_SUCCESS;
}

export interface IResetPasswordFailed {
    readonly type: typeof RESET_PASSWORD_FAILED;
}

export interface IResetPasswordToInitial {
    readonly type: typeof RESET_PASSWORD_TO_INITIAL;
}

export type TResetPasswordActions =
    | IResetPasswordSuccess
    | IResetPasswordFailed
    | IResetPasswordToInitial;

export const resetPassword: AppThunk = (password: string, token: string) => {
  return async function(dispatch: AppDispatch) {
    return await executePostRequest(POST_PASSWORD_RESTORE_RESET_URL, {
      password,
      token,
    }).then((data) => {
        if (!data?.success) {
            throw new Error(data?.message);
        }
        if (data?.success){
            dispatch({
                type: RESET_PASSWORD_SUCCESS,
            });
        }
    }).catch((err) => {
        dispatch({
            type: RESET_PASSWORD_FAILED,
        });
        console.error(err);
    });
  };
};
