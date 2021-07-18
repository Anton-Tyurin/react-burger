import { executePostRequest } from "../executeRequest";
import { POST_REGISTER_URL } from "../../constants/constants";

export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAILED = "REGISTER_FAILED";
export const REGISTER_TO_INITIAL = "REGISTER_TO_INITIAL";

export const registerUser = (password, email, name) => {
  return async function(dispatch) {
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
