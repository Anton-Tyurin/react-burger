import React from "react";
import style from "./burger-ingredients-card.module.css";
import {
  CurrencyIcon,
  Counter,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { ingredientsPropTypes } from "../../../prop-types/burger-ingredients-propTypes";
import PropTypes from "prop-types";

export const BurgerIngredientsCard = React.memo((props) => {
  const { cardData, handleListItemClick } = props;
  const handleClick = () => handleListItemClick(cardData);

  return (
    <div onClick={handleClick} className={`${style.card} mr-6 mb-8"`}>
      <img
        className="mb-1"
        width={240}
        height={120}
        src={cardData?.image}
        alt={cardData?.name}
      />
      <div className={`${style.ingredientPrice} mb-1`}>
        <span className="text text_type_digits-default mr-2">
          {cardData?.price}
        </span>
        <CurrencyIcon type="primary" />
      </div>
      <h3 className={`${style.ingredientHeading} text text_type_main-default`}>
        {cardData?.name}
      </h3>
      <div className={style.ingredientCardCounter}>
        {/*TODO: для имитации что не у всех есть Counter. потом убрать*/}
        {Math.random() < 0.5 && <Counter count={1} size="default" />}
      </div>
    </div>
  );
});

BurgerIngredientsCard.propTypes = {
  cardData: ingredientsPropTypes.isRequired,
  handleListItemClick: PropTypes.func.isRequired,
};

export default BurgerIngredientsCard;
