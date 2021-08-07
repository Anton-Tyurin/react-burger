import { orderDetailsInitialState, orderDetailsReducer } from "./order-details";
import {
  ORDER_NUMBER_FAILED,
  ORDER_NUMBER_REQUEST,
  ORDER_NUMBER_SUCCESS,
} from "../actions/order-details";

describe("order details reducer", () => {
  it("should return initial state", () => {
    expect(orderDetailsReducer(undefined, {})).toEqual(
      orderDetailsInitialState
    );
  });
  it("should request order number", () => {
    expect(
      orderDetailsReducer(orderDetailsInitialState, {
        type: ORDER_NUMBER_REQUEST,
      })
    ).toEqual(
      expect.objectContaining({
        isLoading: true,
      })
    );
  });
  it("should catch an error", () => {
    expect(
      orderDetailsReducer(orderDetailsInitialState, {
        type: ORDER_NUMBER_FAILED,
      })
    ).toEqual(
      expect.objectContaining({
        hasError: true,
      })
    );
  });
  it("should get order number", () => {
    expect(
      orderDetailsReducer(orderDetailsInitialState, {
        type: ORDER_NUMBER_SUCCESS,
        orderNumber: 333,
      })
    ).toEqual(
      expect.objectContaining({
        isLoading: false,
        orderNumber: 333,
      })
    );
  });
});
