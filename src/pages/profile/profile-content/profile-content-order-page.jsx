import { useDispatch, useSelector } from "react-redux";
import React from "react";
import { WS_CONNECTION_START } from "../../../services/actions/feed-socket";
import OrdersItem from "../../../components/order-item/orders-item";
import { getCookie } from "../../../utils/cookie";

export function ProfileContentOrderPage() {
  const dispatch = useDispatch();
  const token = getCookie("accessToken");
  React.useEffect(() => {
    dispatch({ type: WS_CONNECTION_START, payload: { token: token } });
  }, []);

  const { ordersData } = useSelector((store) => store.wsOrdersReducer);

  return (
    <section>
      {!!ordersData?.length ? (
        ordersData.map((order, index) => {
          return (
            <OrdersItem
              item={order}
              status={order.status}
              key={`${index}_${order._id}`}
            />
          );
        })
      ) : (
        <h2>Лента Заказов пуста</h2>
      )}
    </section>
  );
}
