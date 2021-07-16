import { executePostRequest } from "../executeRequest";
import { POST_PASSWORD_RESTORE_URL } from "../../constants/constants";

export const FORGOT_PASSWORD_REQUEST = "FORGOT_PASSWORD_REQUEST";
export const FORGOT_PASSWORD_SUCCESS = "FORGOT_PASSWORD_SUCCESS";
export const FORGOT_PASSWORD_FAILED = "FORGOT_PASSWORD_FAILED";
export const FORGOT_PASSWORD_TO_INITIAL = "FORGOT_PASSWORD_TO_INITIAL";

export const requestPasswordCode = (email) => {
  return async function(dispatch) {
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
        if (data?.success){
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
