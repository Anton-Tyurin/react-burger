import React from "react";
import style from "./feed.module.css";
import OrdersItem from "../../components/order-item/orders-item";
import { WS_CONNECTION_START } from "../../services/actions/feed-socket";
import OrdersBoard from "../../components/orders-board/orders-board";
import {TBurgerOrder, useDispatch, useSelector} from "../../types/types";

export const FeedPage: React.FC = () =>  {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch({ type: WS_CONNECTION_START });
  }, []);

  const { ordersData } = useSelector((store) => store.wsOrdersReducer);

  return (
    <div>
      <div className={style.feedPageColumns}>
        <div>
          <h2 className={`text text_type_main-large mt-10 mb-5`}>
            Лента заказов
          </h2>
          <div className={style.feedPageOrders}>
            {!!ordersData?.length ? (
              ordersData.map((order: TBurgerOrder, index: number) => {
                return (
                  <OrdersItem item={order} key={`${index}_${order._id}`} />
                );
              })
            ) : (
              <h2>Лента Заказов пуста</h2>
            )}
          </div>
        </div>
        <OrdersBoard />
      </div>
    </div>
  );
}
