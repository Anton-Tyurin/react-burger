import {
  WS_CONNECTION_CLOSED,
  WS_CONNECTION_ERROR,
  WS_CONNECTION_START,
  WS_CONNECTION_SUCCESS,
  WS_GET_ORDERS,
} from "../actions/feed-socket";

export const wsOrdersInitialState = {
  connectionStatus: undefined,

  ordersData: [],
  totalOrdersCount: null,
  todayOrdersCount: null,
};

export const wsOrdersReducer = (state = wsOrdersInitialState, action) => {
  switch (action.type) {
    case WS_GET_ORDERS: {
      return {
        ...state,
        ordersData: action?.message?.orders,
        totalOrdersCount: action?.message?.total,
        todayOrdersCount: action?.message?.totalToday,
      };
    }

    case WS_CONNECTION_CLOSED: {
      return { ...state, connectionStatus: "disconnected" };
    }

    case WS_CONNECTION_ERROR: {
      return { ...state, connectionStatus: "error" };
    }

    case WS_CONNECTION_SUCCESS: {
      return { ...state, connectionStatus: "connected" };
    }

    case WS_CONNECTION_START: {
      return { ...state, connectionStatus: "loading" };
    }

    default: {
      return state;
    }
  }
};
