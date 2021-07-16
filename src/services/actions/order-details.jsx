import {
  AUTH_TOKEN_EXPIRED_MESSAGE,
  POST_ORDER_URL,
} from "../../constants/constants";
import React from "react";
import { executePostRequest } from "../executeRequest";
import { getCookie } from "../../utils/cookie";
import { updateToken } from "./auth";

export const ORDER_NUMBER_REQUEST = "ORDER_NUMBER_REQUEST";
export const ORDER_NUMBER_SUCCESS = "ORDER_NUMBER_SUCCESS";
export const ORDER_NUMBER_FAILED = "ORDER_NUMBER_FAILED";
export const ORDER_NUMBER_DELETE = "ORDER_NUMBER_DELETE";

export const getOrderNumber = () => {
  return async function(dispatch, getState) {
    dispatch({
      type: ORDER_NUMBER_REQUEST,
    });
    const constructorData = getState().burgerConstructorReducer;
    const allIngredients = [
      ...constructorData.constructorIngredients,
      constructorData.constructorBunsType,
    ];
    const orderInfo = allIngredients?.map((el) => el?._id);
    const token = "Bearer " + getCookie("accessToken");
    return await executePostRequest(
      POST_ORDER_URL,
      { ingredients: orderInfo },
      {
        Authorization: token,
      }
    )
      .then((data) => {
        if (!data?.success && data?.message !== AUTH_TOKEN_EXPIRED_MESSAGE) {
          throw new Error(data?.message);
        }
        if (data?.message === AUTH_TOKEN_EXPIRED_MESSAGE) {
          return updateToken()
            .then(() => dispatch(getOrderNumber()))
            .catch((e) => console.error(e));
        }
        dispatch({
          type: ORDER_NUMBER_SUCCESS,
          orderNumber: data?.order?.number,
        });
      })
      .catch((e) => {
        dispatch({ type: ORDER_NUMBER_FAILED });
        console.error("error during request:", e);
      });
  };
};
