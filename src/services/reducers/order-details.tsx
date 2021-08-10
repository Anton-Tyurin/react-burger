import {
  ORDER_NUMBER_REQUEST,
  ORDER_NUMBER_SUCCESS,
  ORDER_NUMBER_FAILED, TOrderNumberActions,
} from "../actions/order-details";

type TInitialState = {
  isLoading: boolean;
  hasError: boolean;
  orderNumber: number | null;

  isOrderModalShow: boolean,
};

export const orderDetailsInitialState = {
  orderNumber: null,
  isLoading: false,
  hasError: false,

  isOrderModalShow: false,
};

export const orderDetailsReducer = (
  state = orderDetailsInitialState,
  action: TOrderNumberActions
): TInitialState => {
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
