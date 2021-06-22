import React, { useState } from "react";
import style from "./burger-constructor.module.css";
import PropTypes from "prop-types";
import Modal from "../modal/modal";
import OrderDetails from "../modal/modal-types/order-details/order-details";
import BurgerConstructorItems from "./burger-constructor-items";
import BurgerConstructorPrice from "./burger-constructor-price";

export const BurgerConstructor = React.memo((props) => {
  const [visible, setVisible] = useState(false);
  const [orderPrice, setOrderPrice] = useState(0);

  const { orderNumber, getOrderNumber, setBurgerActualData } = props;
  const handleModalOpen = () => {
    getOrderNumber();
    setVisible(true);
  };
  const closeModal = () => {
    setVisible(false);
  };
  return (
    <section className={`${style.burgerConstructor} mt-25`}>
      <BurgerConstructorItems
        setOrderPrice={setOrderPrice}
        setBurgerActualData={setBurgerActualData}
      />
      <BurgerConstructorPrice
        orderPrice={orderPrice}
        openModal={handleModalOpen}
      />
      {visible && (
        <Modal onClose={closeModal}>
          <OrderDetails orderNumber={orderNumber} />
        </Modal>
      )}
    </section>
  );
});

BurgerConstructor.propTypes = {
  getOrderNumber: PropTypes.func.isRequired,
  setBurgerActualData: PropTypes.func.isRequired,
  orderNumber: PropTypes.number.isRequired,
};

export default BurgerConstructor;
