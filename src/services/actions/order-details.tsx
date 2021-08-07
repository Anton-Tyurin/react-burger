import {
  AUTH_TOKEN_EXPIRED_MESSAGE,
  POST_ORDER_URL,
} from "../../constants/constants";
import React from "react";
import { executePostRequest } from "../executeRequest";
import { getCookie } from "../../utils/cookie";
import { updateToken } from "./auth";
import {AppDispatch, AppThunk, RootState} from "../../types/types";

export const ORDER_NUMBER_REQUEST: "ORDER_NUMBER_REQUEST" =
  "ORDER_NUMBER_REQUEST";
export const ORDER_NUMBER_SUCCESS: "ORDER_NUMBER_SUCCESS" =
  "ORDER_NUMBER_SUCCESS";
export const ORDER_NUMBER_FAILED: "ORDER_NUMBER_FAILED" = "ORDER_NUMBER_FAILED";
export const ORDER_NUMBER_DELETE: "ORDER_NUMBER_DELETE" = "ORDER_NUMBER_DELETE";

export interface IOrderNumberRequest {
  readonly type: typeof ORDER_NUMBER_REQUEST;
}

export interface IOrderNumberSuccess {
  readonly type: typeof ORDER_NUMBER_SUCCESS;
  orderNumber: number;
}

export interface IOrderNumberFailed {
  readonly type: typeof ORDER_NUMBER_FAILED;
}

export interface IOrderNumberDelete {
  readonly type: typeof ORDER_NUMBER_DELETE;
}

export type TOrderNumberActions =
  | IOrderNumberRequest
  | IOrderNumberFailed
  | IOrderNumberDelete
  | IOrderNumberSuccess;

export const getOrderNumber: AppThunk = () => {
  return async function(dispatch: AppDispatch, getState: RootState) {
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
