import React from "react";
import { useParams } from "react-router-dom";
import {
  getFixedDate,
  getOrderData,
  getOrderPrice,
  getUnicData,
  getStatusName,
} from "../../../../utils/orders";
import style from "./feed-order-details.module.css";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import {
  TBurgerIngredient,
  TBurgerOrder,
  useSelector,
} from "../../../../types/types";
import {RootStateOrAny} from "react-redux";

export const FeedDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const selectedOrder: TBurgerOrder = useSelector(
    (store: RootStateOrAny) =>
      store.wsOrdersReducer.ordersData?.filter(
        (el: TBurgerOrder) => el._id === id
      )[0]
  );
  const orderData = getOrderData(selectedOrder?.ingredients);
  const unicData = getUnicData(selectedOrder?.ingredients);
  const getIngredientsCount = (id: string) =>
    orderData?.filter((e: TBurgerIngredient) => e._id === id).length;

  return (
    <>
      {orderData && (
        <section className="ml-10 mr-10 pb-10">
          <div className="mb-15">
            <div className="text text_type_main-medium mb-2">
              {selectedOrder?.name}
            </div>
            <span
              className={`${style.feedModalStatus} text text_type_main-default`}
            >
              {getStatusName(selectedOrder?.status)}
            </span>
          </div>
          <div className="mb-10">
            <div className="text text_type_main-medium mb-3">Состав:</div>
            <div className={style.feedOrderItemsWrapper}>
              {unicData?.map((el: TBurgerIngredient, index: number) => {
                return (
                  <div
                    className={style.feedModalIngredientItem}
                    key={`modal_order_feed_item_${index}`}
                  >
                    <div className={style.feedModalIngredientNameBlock}>
                      <div className={`${style.feedModalImage} mr-3`}>
                        <img
                          width={60}
                          height={55}
                          src={el?.image_mobile}
                          alt="ингредиент"
                        />
                      </div>
                      <span className="text text_type_main-default">
                        {el?.name}
                      </span>
                    </div>
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <div className="mr-3 text text_type_main-default">{`${getIngredientsCount(
                        el?._id
                      )} x ${el?.price}`}</div>
                      <CurrencyIcon type="primary" />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <span className="text_color_inactive">
              {getFixedDate(selectedOrder?.createdAt)}
            </span>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <div className="text text_type_digits-default">
                {getOrderPrice(orderData)}
              </div>
              <CurrencyIcon type="primary" />
            </div>
          </div>
        </section>
      )}
    </>
  );
};
