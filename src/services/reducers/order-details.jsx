import {
  ORDER_NUMBER_REQUEST,
  ORDER_NUMBER_SUCCESS,
  ORDER_NUMBER_FAILED,
} from "../actions/order-details";

const orderDetailsInitialState = {
  orderNumber: null,
  isLoading: false,
  hasError: false,

  isOrderModalShow: false,
};

export const orderDetailsReducer = (
  state = orderDetailsInitialState,
  action
) => {
  switch (action.type) {
    case ORDER_NUMBER_REQUEST: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case ORDER_NUMBER_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        orderNumber: action.orderNumber,
      };
    }
    case ORDER_NUMBER_FAILED: {
      return {
        ...state,
        isLoading: false,
        hasError: true,
      };
    }
    default:
      return state;
  }
};
