import { executePostRequest } from "../executeRequest";
import { POST_PASSWORD_RESTORE_RESET_URL } from "../../constants/constants";

export const RESET_PASSWORD_SUCCESS = "RESET_PASSWORD_SUCCESS";
export const RESET_PASSWORD_FAILED = "RESET_PASSWORD_FAILED";
export const RESET_PASSWORD_TO_INITIAL = "RESET_PASSWORD_TO_INITIAL";

export const resetPassword = (password, token) => {
  return async function(dispatch) {
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
