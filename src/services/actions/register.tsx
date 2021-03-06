import { executePostRequest } from "../executeRequest";
import { POST_REGISTER_URL } from "../../constants/constants";
import {AppDispatch, AppThunk} from "../../types/types";

export const REGISTER_SUCCESS: "REGISTER_SUCCESS" = "REGISTER_SUCCESS";
export const REGISTER_FAILED: "REGISTER_FAILED" = "REGISTER_FAILED";
export const REGISTER_TO_INITIAL: "REGISTER_TO_INITIAL" = "REGISTER_TO_INITIAL";

export interface IRegisterSuccess {
    readonly type: typeof REGISTER_SUCCESS;
}

export interface IRegisterFailed {
    readonly type: typeof REGISTER_FAILED;
}

export interface IRegisterToInitial {
    readonly type: typeof REGISTER_TO_INITIAL;
}

export type TRegisterActions =
    | IRegisterSuccess
    | IRegisterFailed
    | IRegisterToInitial;

export const registerUser: AppThunk = (password: string, email: string, name: string) => {
  return async function(dispatch: AppDispatch) {
    return await executePostRequest(POST_REGISTER_URL, {
      password,
      email,
      name,
    })
      .then((data) => {
        if (!data?.success) {
          throw new Error(data?.message);
        }
        dispatch({
          type: REGISTER_SUCCESS,
        });
      })
      .catch((err) => {
        dispatch({
          type: REGISTER_FAILED,
        });
        console.error(err);
      });
  };
};
