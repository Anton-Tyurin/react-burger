import { compose, createStore, applyMiddleware } from "redux";

import thunk from "redux-thunk";
import { rootReducer } from "./reducers";
import { ORDERS_WS_URL } from "../constants/constants";
import {
  WS_CONNECTION_CLOSED,
  WS_CONNECTION_ERROR,
  WS_CONNECTION_START,
  WS_CONNECTION_SUCCESS,
  WS_GET_ORDERS,
} from "./actions/feed-socket";
import { socketMiddleware } from "./middleware/socketMiddleware";

const wsUrl = ORDERS_WS_URL;

export const wsActions = {
  wsInit: WS_CONNECTION_START,
  onOpen: WS_CONNECTION_SUCCESS,
  onClose: WS_CONNECTION_CLOSED,
  onError: WS_CONNECTION_ERROR,
  onMessage: WS_GET_ORDERS,
};

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

export const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composeEnhancers(applyMiddleware( thunk, socketMiddleware(wsUrl, wsActions)));
export const store = createStore(rootReducer, enhancer);
