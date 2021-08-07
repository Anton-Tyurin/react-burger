import React from "react";
import { WS_CONNECTION_START } from "../../../services/actions/feed-socket";
import OrdersItem from "../../../components/order-item/orders-item";
import { getCookie } from "../../../utils/cookie";
import {TBurgerOrder, useDispatch, useSelector} from "../../../types/types";

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
        ordersData.map((order: TBurgerOrder, index: number) => {
          return (
            <OrdersItem
              item={order}
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
