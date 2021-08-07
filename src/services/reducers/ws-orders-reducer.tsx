import {
  TWSConnectionActions,
  WS_CONNECTION_CLOSED,
  WS_CONNECTION_ERROR,
  WS_CONNECTION_START,
  WS_CONNECTION_SUCCESS,
  WS_GET_ORDERS,
} from "../actions/feed-socket";
import { TBurgerOrder } from "../../types/types";

type TInitialState = {
  connectionStatus:
    | undefined
    | "disconnected"
    | "error"
    | "connected"
    | "loading";

  totalOrdersCount: null | number;
  todayOrdersCount: null | number;

  ordersData: TBurgerOrder[];
};

export const wsOrdersInitialState = {
  connectionStatus: undefined,

  ordersData: [],
  totalOrdersCount: null,
  todayOrdersCount: null,
};

export const wsOrdersReducer = (
  state = wsOrdersInitialState,
  action: TWSConnectionActions
): TInitialState => {
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
