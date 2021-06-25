import { POST_ORDER_URL } from "../../constants/constants";
import React from "react";

export const ORDER_NUMBER_REQUEST = "ORDER_NUMBER_REQUEST";
export const ORDER_NUMBER_SUCCESS = "ORDER_NUMBER_SUCCESS";
export const ORDER_NUMBER_FAILED = "ORDER_NUMBER_FAILED";
export const ORDER_NUMBER_DELETE = "ORDER_NUMBER_DELETE";

export const getOrderNumber = () => {
  return function(dispatch, getState) {
    dispatch({
      type: ORDER_NUMBER_REQUEST,
    });
    const constructorData = getState().burgerConstructorReducer;
    const allIngredients = [
      ...constructorData.constructorIngredients,
      constructorData.constructorBunsType,
    ];
    const orderInfo = allIngredients?.map((el) => el?._id);
    fetch(POST_ORDER_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ingredients: orderInfo }),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(res.status);
      })
      .then((res) => {
        dispatch({
          type: ORDER_NUMBER_SUCCESS,
          orderNumber: res.order?.number,
        });
      })
      .catch((e) => {
        dispatch({ type: ORDER_NUMBER_FAILED });
        console.error("error during request:", e);
      });
  };
};
