import React from "react";
import style from "./burger-ingredients-card.module.css";
import {
  CurrencyIcon,
  Counter,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useDrag } from "react-dnd";
import { TBurgerIngredient, useSelector } from "../../../types/types";

type TProps = {
  cardData: TBurgerIngredient;
};

export const BurgerIngredientsCard: React.FC<TProps> = React.memo((props) => {
  const { cardData } = props;

  const { constructorBunsType, constructorIngredients } = useSelector(
      (store) => store.burgerConstructorReducer
  );

  const [, dragRef] = useDrag({
    type: "ingredients",
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
        (item: TBurgerIngredient) => item && cardData._id === item._id
    ).length;
  }, [constructorBunsType, constructorIngredients, cardData]);

  return (
      <div ref={dragRef} className={`${style.card} mr-6 mb-8"`}>
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
              <Counter
                  count={cardData?.type === "bun" ? 2 : getCountValue}
                  size="default"
              />
            </div>
        )}
      </div>
  );
});

export default BurgerIngredientsCard;
