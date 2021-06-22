import React from "react";
import style from "./order-details.module.css";
import OrderOk from "../../../../images/order-ok.png";
import PropTypes from "prop-types";

function OrderDetails(props) {
  const { orderNumber } = props;
  return (
    <div className={`${style.orderDetailsWrapper} mt-4`}>
      <span className={`${style.orderDetailsDigits} mb-8 text text_type_digits-large`}>{orderNumber}</span>
      <span className="text text_type_main-medium mb-15">
        идентификатор заказа
      </span>
      <img
        width={120}
        height={120}
        src={OrderOk}
        alt="order ok"
        className="mb-15"
      />
      <span className="text text_type_main-default mb-2">
        Ваш заказ начали готовить
      </span>
      <span className="text text_type_main-default text_color_inactive mb-30">
        Дождитесь готовности на орбитальной станции
      </span>
    </div>
  );
}

OrderDetails.propTypes = {
    orderNumber: PropTypes.number.isRequired,
};


export default OrderDetails;
