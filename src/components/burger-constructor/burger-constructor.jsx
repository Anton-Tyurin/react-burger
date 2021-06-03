import React, { useState } from "react";
import style from "./burger-constructor.module.css";
import { ingredientsPropTypes } from "../../prop-types/burger-ingredients-propTypes";
import PropTypes from "prop-types";
import Modal from "../modal/modal";
import OrderDetails from "../modal/modal-types/order-details/order-details";
import BurgerConstructorItems from "./burger-constructor-items";
import BurgerConstructorPrice from "./burger-constructor-price";

function BurgerConstructor(props) {
  const { data } = props;
  const dataBuns = data.filter((e) => e.type === "bun");
  const dataIngredients = data.filter((e) => e.type !== "bun");
  const [visible, setVisible] = useState(false);

  const openModal = () => {
    setVisible(true);
  };
  const closeModal = () => {
    setVisible(false);
  };

  return (
    <section className={`${style.burgerConstructor} mt-25`}>
      <BurgerConstructorItems
        dataBuns={dataBuns}
        dataIngredients={dataIngredients}
      />
      <BurgerConstructorPrice openModal={openModal} />
      {visible && (
        <Modal onClose={closeModal}>
          <OrderDetails />
        </Modal>
      )}
    </section>
  );
}

BurgerConstructor.propTypes = {
  data: PropTypes.arrayOf(ingredientsPropTypes.isRequired),
};

export default BurgerConstructor;
