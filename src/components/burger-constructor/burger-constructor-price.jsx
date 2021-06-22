import React from "react";
import style from "./burger-constructor.module.css";
import PropTypes from "prop-types";
import Currency from "../../images/currency.png";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";

function BurgerConstructorPrice(props) {
  const { openModal, orderPrice } = props;
  return (
    <div className={`${style.constructorPriceBlock} pl-4 pr-4`}>
      <div className={`${style.constructorPrice} mr-10`}>
        {orderPrice ? (
          <>
            <span className="text text_type_digits-medium mr-2">
              {orderPrice}
            </span>
            <img width={36} height={36} src={Currency} alt="валюта" />
          </>
        ) : (
          <span className="text text_type_main-default mr-2">
            Ошибка в подсчете суммы
          </span>
        )}
      </div>
      <Button onClick={openModal} type="primary" size="large">
        Оформить заказ
      </Button>
    </div>
  );
}

BurgerConstructorPrice.propTypes = {
  openModal: PropTypes.func.isRequired,
};

export default BurgerConstructorPrice;
