import { TWSConnectionActions } from "../actions/feed-socket";

export const socketMiddleware = (wsUrl: string, wsActions: any) => {
  return (store: any) => {
    let socket: WebSocket | null = null;

    return (next: any) => (action: TWSConnectionActions) => {
      const { dispatch, payload } = store;
      const { type } = action;
      const { wsInit, wsSendMessage, onOpen, onClose, onError, onMessage } =
        wsActions;

      if (type === wsInit) {
        if (payload && payload.token) {
          socket = new WebSocket(`${wsUrl}?token=${payload.token}`);
        } else {
          socket = new WebSocket(`${wsUrl}/all`);
        }
      }

      if (socket) {
        socket.onopen = (event: Event) => {
          dispatch({ type: onOpen, payload: event });
        };

        socket.onerror = (event: Event) => {
          dispatch({ type: onError, payload: event });
        };

        socket.onmessage = (event: MessageEvent) => {
          const parsedData = JSON.parse(event.data);
          const { success, ...message } = parsedData;
          dispatch({ type: onMessage, message: message });
        };

        socket.onclose = (event: CloseEvent) => {
          dispatch({ type: onClose, payload: event });
        };

        if (type === wsSendMessage) {
          const message = { payload };
          socket.send(JSON.stringify(message));
        }
      }
      next(action);
    };
  };
};
