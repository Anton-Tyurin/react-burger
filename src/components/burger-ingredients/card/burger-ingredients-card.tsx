import React, { useState } from "react";
import style from "./burger-ingredients-card.module.css";
import {
  CurrencyIcon,
  Counter,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { ingredientsPropTypes } from "../../../prop-types/burger-ingredients-propTypes";
import Modal from "../../modal/modal";
import IngredientDetails from "../../modal/modal-types/ingredient-details";

function BurgerIngredientsCard(props: any) {
  const { cardData } = props;
  const [visible, setVisible] = useState(false);

  const openModal = () => {
    setVisible(true);
  };
  const closeModal = () => {
    setVisible(false);
  };
  return (
    <>
      <div onClick={openModal} className={`${style.card} mr-6 mb-8"`}>
        <img
          className="mb-1"
          width={240}
          height={120}
          src={cardData?.image}
          alt="cat"
        />
        <div className={`${style.ingredientPrice} mb-1`}>
          <span className="text text_type_digits-default mr-2">
            {cardData?.price}
          </span>
          <CurrencyIcon type="primary" />
        </div>
        <h3
          className={`${style.ingredientHeading} text text_type_main-default`}
        >
          {cardData?.name}
        </h3>
        <div className={style.ingredientCardCounter}>
          {/*TODO: для имитации что не у всех есть Counter. потом убрать*/}
          {Math.random() < 0.5 && <Counter count={1} size="default" />}
        </div>
      </div>
      {visible && (
        <Modal header={"Детали ингредиента"} onClose={closeModal}>
          <IngredientDetails ingredientData={cardData} />
        </Modal>
      )}
    </>
  );
}

BurgerIngredientsCard.propTypes = {
  cardData: ingredientsPropTypes.isRequired,
};

export default BurgerIngredientsCard;
