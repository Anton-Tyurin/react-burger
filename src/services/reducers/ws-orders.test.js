import { wsOrdersInitialState, wsOrdersReducer } from "./ws-orders-reducer";
import {
  WS_CONNECTION_CLOSED,
  WS_CONNECTION_ERROR,
  WS_CONNECTION_START,
  WS_CONNECTION_SUCCESS,
  WS_GET_ORDERS,
} from "../actions/feed-socket";

describe("we orders reducer", () => {
  it("should return initial state", () => {
    expect(wsOrdersReducer(undefined, {})).toEqual(wsOrdersInitialState);
  });
  it("should get orders data", () => {
    const ordersMock = [
      {
        ingredients: [
          "60d3463f7034a000269f45e7",
          "60d3463f7034a000269f45e9",
          "60d3463f7034a000269f45e8",
          "60d3463f7034a000269f45ea",
        ],
        _id: "",
        status: "done",
        number: 0,
        createdAt: "2021-06-23T14:43:22.587Z",
        updatedAt: "2021-06-23T14:43:22.603Z",
      },
    ];
    expect(
      wsOrdersReducer(wsOrdersInitialState, {
        type: WS_GET_ORDERS,
        message: {
          orders: ordersMock,
          total: 300,
          totalToday: 10,
        },
      })
    ).toEqual(
      expect.objectContaining({
        ordersData: ordersMock,
        totalOrdersCount: 300,
        todayOrdersCount: 10,
      })
    );
  });
  it("should have disconnect status", () => {
    expect(
      wsOrdersReducer(wsOrdersInitialState, {
        type: WS_CONNECTION_CLOSED,
      })
    ).toEqual(
      expect.objectContaining({
        connectionStatus: "disconnected",
      })
    );
  });
  it("should have error status", () => {
    expect(
      wsOrdersReducer(wsOrdersInitialState, {
        type: WS_CONNECTION_ERROR,
      })
    ).toEqual(
      expect.objectContaining({
        connectionStatus: "error",
      })
    );
  });
  it("should have success status", () => {
    expect(
      wsOrdersReducer(wsOrdersInitialState, {
        type: WS_CONNECTION_SUCCESS,
      })
    ).toEqual(
      expect.objectContaining({
        connectionStatus: "connected",
      })
    );
  });
  it("should have loading status", () => {
    expect(
      wsOrdersReducer(wsOrdersInitialState, {
        type: WS_CONNECTION_START,
      })
    ).toEqual(
      expect.objectContaining({
        connectionStatus: "loading",
      })
    );
  });
});
