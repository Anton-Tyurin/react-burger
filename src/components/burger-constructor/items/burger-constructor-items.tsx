import React, { useEffect } from "react";
import style from "../burger-constructor.module.css";
import { ConstructorElement } from "@ya.praktikum/react-developer-burger-ui-components";
import BurgerConstructorItem from "./burger-constructor-item";
import { TBurgerIngredient, useSelector } from "../../../types/types";

type TProps = {
  setOrderPrice: React.Dispatch<React.SetStateAction<number>>
};

const BurgerConstructorItems: React.FC<TProps> = (props) => {
  const { constructorBunsType, constructorIngredients } = useSelector<{ constructorBunsType: TBurgerIngredient, constructorIngredients: TBurgerIngredient[] }>(
    (store) => store.burgerConstructorReducer
  );
  const { setOrderPrice } = props;

  useEffect(() => {
    setOrderPrice(
      constructorIngredients?.reduce((acc: number, el: TBurgerIngredient) => {
        return acc + el?.price;
      }, constructorBunsType?.price * 2 || 0)
    );
  }, [constructorBunsType, constructorIngredients]);

  return (
    <div className={`${style.constructorItems} mb-10`}>
      {constructorBunsType && (
        <ConstructorElement
          thumbnail={constructorBunsType?.image}
          price={constructorBunsType?.price}
          text={`${constructorBunsType?.name} (верх)`}
          isLocked
        />
      )}
      <div className={`${style.constructorIngredientsWrapper}`}>
        {constructorIngredients?.map((el: TBurgerIngredient, index: number) => {
          return (
            <BurgerConstructorItem
              id={el?.unquieKey}
              index={index}
              thumbnail={el?.image}
              price={el?.price}
              text={el?.name}
              key={el?.unquieKey}
            />
          );
        })}
      </div>
      {constructorBunsType && (
        <ConstructorElement
          thumbnail={constructorBunsType?.image}
          price={constructorBunsType?.price}
          text={`${constructorBunsType?.name} (низ)`}
          isLocked
        />
      )}
    </div>
  );
};

export default BurgerConstructorItems;
