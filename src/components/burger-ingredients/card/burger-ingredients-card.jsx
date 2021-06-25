import React from "react";
import style from "./burger-ingredients-card.module.css";
import {
  CurrencyIcon,
  Counter,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { ingredientsPropTypes } from "../../../prop-types/burger-ingredients-propTypes";
import PropTypes from "prop-types";
import { useDrag } from "react-dnd";
import { useSelector } from "react-redux";

export const BurgerIngredientsCard = React.memo((props) => {
  const { cardData, handleListItemClick } = props;

  const handleClick = () => handleListItemClick(cardData);
  const { constructorBunsType, constructorIngredients } = useSelector(
    (store) => store.burgerConstructorReducer
  );

  const [, dragRef] = useDrag({
    type: "ingredient",
    item: cardData,
    collect: (monitor) => ({
      isDrag: monitor.isDragging(),
    }),
  });

  const getCountValue = React.useMemo(() => {
    const actualBunsAndIngredients = [
      ...constructorIngredients,
      constructorBunsType,
    ];
    return actualBunsAndIngredients?.filter(
      (item) => item && cardData._id === item._id
    ).length;
  }, [constructorBunsType, constructorIngredients, cardData]);

  return (
    <div
      ref={dragRef}
      onClick={handleClick}
      className={`${style.card} mr-6 mb-8"`}
    >
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
      {getCountValue > 0 && (
        <div className={style.ingredientCardCounter}>
          <Counter count={getCountValue} size="default" />
        </div>
      )}
    </div>
  );
});

BurgerIngredientsCard.propTypes = {
  cardData: ingredientsPropTypes.isRequired,
  handleListItemClick: PropTypes.func.isRequired,
};

export default BurgerIngredientsCard;
