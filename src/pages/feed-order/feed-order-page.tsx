import React from "react";
import { useParams } from "react-router-dom";
import style from "./feed-order-page.module.css";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import {
  getFixedDate,
  getOrderData,
  getOrderPrice,
  getStatusName,
  getUnicData,
} from "../../utils/orders";
import { WS_CONNECTION_START } from "../../services/actions/feed-socket";
import { getCookie } from "../../utils/cookie";
import {TBurgerIngredient, TBurgerOrder, useDispatch, useSelector} from "../../types/types";
import {RootStateOrAny} from "react-redux";

export const FeedDetailsPage: React.FC = () =>  {
  const dispatch = useDispatch();
  const token = getCookie("accessToken");
  const { id } = useParams<{ id: string }>();
  React.useEffect(() => {
    dispatch({ type: WS_CONNECTION_START, payload: { token: token } });
  }, []);

  const selectedOrder = useSelector(
    (store: RootStateOrAny) =>
      store.wsOrdersReducer.ordersData?.filter((el: TBurgerOrder) => el._id === id)[0]
  );
  const orderData = getOrderData(selectedOrder?.ingredients);
  const unicData = getUnicData(selectedOrder?.ingredients);
  const getIngredientsCount = (id: string) =>
    orderData.filter((e: TBurgerIngredient) => e._id === id).length;

  return (
    <>
      {orderData && (
        <section className={`${style.feedOrderPageWrapper} pb-10`}>
          <h2
            style={{ textAlign: "center" }}
            className="text text_type_digits-medium mb-5"
          >
            #{selectedOrder?.number}
          </h2>
          <div className="mb-15">
            <div className="text text_type_main-medium mb-2">
              {selectedOrder?.name}
            </div>
            <span
              className={`${style.feedPageStatus} text text_type_main-default`}
            >
              {getStatusName(selectedOrder?.status)}
            </span>
          </div>
          <div className="mb-10">
            <div className="text text_type_main-medium mb-3">Состав:</div>
            <div className={style.feedOrderItemsWrapper}>
              {unicData.map((el: TBurgerIngredient, index: number) => {
                return (
                  <div
                    className={style.feedPageIngredientItem}
                    key={`page_order_feed_item_${index}`}
                  >
                    <div className={style.feedPageIngredientNameBlock}>
                      <div className={`${style.feedPageImage} mr-3`}>
                        <img
                          width={60}
                          height={55}
                          src={el.image_mobile}
                          alt="ингредиент"
                        />
                      </div>
                      <span className="text text_type_main-default">
                        {el.name}
                      </span>
                    </div>
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <div className="text text_type_main-default mr-3">{`${getIngredientsCount(
                        el._id
                      )} x ${el.price}`}</div>
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
}
