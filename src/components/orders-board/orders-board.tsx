import React, { useEffect, useState } from "react";
import style from "./orders-board.module.css";
import { getOrdersStatuses } from "../../utils/orders";
import { useSelector } from "../../types/types";

function OrdersBoard() {
  const { ordersData, totalOrdersCount, todayOrdersCount } = useSelector(
    (store) => store.wsOrdersReducer
  );
  const [burgerStatuses, setBurgerStatuses] =
    useState<{ doneOrders: string[]; pendingOrders: string[] }>();

  useEffect(() => {
    const statuses = getOrdersStatuses(ordersData);
    setBurgerStatuses(statuses);
  }, [ordersData]);

  return (
    <section className={`mb-6 ${style.orderBoardWrapper}`}>
      <div className={`${style.statusesWrapper} mb-15`}>
        <div>
          <div className={"text text_type_main-medium mb-6"}>Готовы:</div>
          <div
            className={`${style.statusesNumbers} ${style.statusesNumberSuccess}`}
          >
            {burgerStatuses?.doneOrders.map((el, index) => {
              return (
                <span
                  className={"text text_type_digits-default mb-2"}
                  key={`success_order_${index}`}
                >
                  {el}
                </span>
              );
            })}
          </div>
        </div>
        <div>
          <div className={"text text_type_main-medium mb-6"}>В работе:</div>
          <div className={style.statusesNumbers}>
            {burgerStatuses?.pendingOrders.map((el, index) => {
              return (
                <span
                  className={"text text_type_digits-default mb-2"}
                  key={`success_order_${index}`}
                >
                  {el}
                </span>
              );
            })}
          </div>
        </div>
      </div>
      <div>
        <span className="text text_type_main-medium">
          Выполнено за все время:
        </span>
        <br />
        <span className={`text text_type_digits-large ${style.orderDigits}`}>
          {totalOrdersCount}
        </span>
      </div>
      <div>
        <span className="text text_type_main-medium">
          Выполнено за сегодня:
        </span>
        <br />
        <span className={`text text_type_digits-large ${style.orderDigits}`}>
          {todayOrdersCount}
        </span>
      </div>
    </section>
  );
}

export default OrdersBoard;
