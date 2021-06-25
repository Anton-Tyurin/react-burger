import React, { useEffect } from "react";
import style from "../burger-constructor.module.css";
import {
  ConstructorElement,
} from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import BurgerConstructorItem from "./burger-constructor-item";

function BurgerConstructorItems(props) {
  const { constructorBunsType, constructorIngredients } = useSelector(
    (store) => store.burgerConstructorReducer
  );
  const { setOrderPrice } = props;

  useEffect(() => {
    setOrderPrice(
      constructorIngredients?.reduce((acc, el) => {
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
        {constructorIngredients?.map((el, index) => {
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
}

BurgerConstructorItems.propTypes = {
  setOrderPrice: PropTypes.func,
};

export default BurgerConstructorItems;
