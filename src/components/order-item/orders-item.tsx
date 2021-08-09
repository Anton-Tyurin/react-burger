import React from "react";
import style from "./orders-item.module.css";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import {
  getFixedDate,
  getOrderData,
  getOrderPrice,
  getUnicData,
  getStatusName,
} from "../../utils/orders";
import { Link, useLocation } from "react-router-dom";
import {TBurgerIngredient, TBurgerOrder} from "../../types/types";

type TProps = {
  item: TBurgerOrder;
};

const OrdersItem: React.FC<TProps> = (props) => {
  const { item } = props;
  const location = useLocation();
  const orderData = getOrderData(item.ingredients);
  const picturesData = getUnicData(item.ingredients);
  let marginLeftAcc = -60;

  return (
    <Link
      key={item._id + "_link"}
      to={{
        pathname: `${
          location.pathname.includes("feed") ? "/feed/" : "/profile/orders/"
        }${item._id}`,
        state: { background: location, header: `#${item.number}` },
      }}
    >
      <section className={`p-6 ${style.orderInfoWrapper} mb-6`}>
        <div className={`${style.orderInfo}`}>
          <span className="text text_type_digits-medium">#{item.number}</span>
          <span className="text text_type_digits-small text_color_inactive">
            {getFixedDate(item.createdAt)}
          </span>
        </div>
        <div
          className={`text ${
            location.pathname.includes("orders")
              ? "text_type_main-medium"
              : "text_type_main-default"
          }`}
        >
          {item.name}
        </div>
        {location.pathname.includes("orders") && (
          <div className={"text text_type_main-default mb-2"}>
            {getStatusName(item.status)}
          </div>
        )}
        <div className={style.orderIngredientsWrapper}>
          <div className={`pr-6 ${style.orderIngredientsList}`}>
            {!!picturesData?.length &&
              picturesData.map((el: TBurgerIngredient, index: number) => {
                marginLeftAcc = marginLeftAcc + 60;
                if (index > 4) return null;
                if (index === 4)
                  return (
                    <div
                      key={`${index}_order_pic`}
                      className={style.ingredientPictureMaskWrapper}
                    >
                      <div
                        style={{
                          left: marginLeftAcc,
                          zIndex: 100 - index,
                          opacity: 0.6,
                        }}
                        className={style.ingredientPicture}
                      >
                        <img
                          width={60}
                          height={55}
                          src={el.image_mobile}
                          alt="Ингредиент"
                        />
                      </div>
                      <span
                        className={`text text_type_main-medium ${style.ingredientPictureMask}`}
                      >
                        {picturesData.length % 5 !== 0
                          ? `+${picturesData.length % 5}`
                          : null}
                      </span>
                    </div>
                  );
                return (
                  <div
                    key={`${index}_order_pic`}
                    style={{ left: marginLeftAcc, zIndex: 100 - index }}
                    className={style.ingredientPicture}
                  >
                    <img
                      width={60}
                      height={55}
                      src={el.image_mobile}
                      alt="Ингредиент"
                    />
                  </div>
                );
              })}
          </div>
          <div style={{ display: "flex" }}>
            <div className="text text_type_digits-default mr-2">
              {orderData && getOrderPrice(orderData)}
            </div>
            <CurrencyIcon type="primary" />
          </div>
        </div>
      </section>
    </Link>
  );
};

export default OrdersItem;
