import React, { useContext, useEffect, useState } from "react";
import style from "./burger-constructor.module.css";
import PropTypes from "prop-types";
import Modal from "../modal/modal";
import OrderDetails from "../modal/modal-types/order-details/order-details";
import BurgerConstructorItems from "./burger-constructor-items";
import BurgerConstructorPrice from "./burger-constructor-price";
import { IngredientsContext } from "../../services/services";

export const BurgerConstructor = React.memo((props) => {
  const data = useContext(IngredientsContext);

  const [visible, setVisible] = useState(false);
  const [randomIngredients] = useState([...data?.ingredients]);
  const [orderPrice, setOrderPrice] = useState(0);

  const { orderNumber, getOrderNumber, setBurgerActualData } = props;
  // TODO: для имитации разного набора заказа и его суммы;
  useEffect(() => {
    randomIngredients.length = Math.floor(
      Math.random() * data?.ingredients?.length
    );
    setOrderPrice(
      randomIngredients.reduce((acc, el) => {
        return acc + el.price;
      }, data?.buns[0]?.price * 2)
    );

    const burgerActualData = [...data?.buns, ...randomIngredients];
    setBurgerActualData(burgerActualData);
  }, []);
  const handleModalOpen = () => {
    getOrderNumber();
    setVisible(true);
  };
  const closeModal = () => {
    setVisible(false);
  };
  return (
    <section className={`${style.burgerConstructor} mt-25`}>
      <BurgerConstructorItems ingredientsData={randomIngredients} />
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
