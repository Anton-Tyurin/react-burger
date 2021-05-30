import React from "react";
import style from "./burger-constructor.module.css";
import { ingredientsPropTypes } from "../../prop-types/burger-ingredients-propTypes";
import PropTypes from "prop-types";
import {
  ConstructorElement,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import Currency from "../../images/currency.png";
import DragNDrop from "../../images/dnd.png";

function BurgerConstructor(props: any) {
  const { data } = props;
  return (
    <section className={`${style.burgerConstructor} mt-25`}>
      <div className={`${style.constructorItemsWrapper} pl-4 pr-4 mb-10`}>
        {data?.map((el: any, index: number) => {
          const getType = () => {
            if (index === 0) {
              return "top";
            } else if (index === data.length - 1) {
              return "bottom";
            }
          };
          return (
            <div key={index}>
              {index !== 0 && index !== data.length - 1 && (
                <img width={24} height={24} src={DragNDrop} alt="dnd-icon" />
              )}
              <ConstructorElement
                thumbnail={el.image}
                price={el.price}
                text={el.name}
                // TODO: для имитации что не у всех есть признак isLocked. потом убрать
                isLocked={Math.random() < 0.5}
                type={getType()}
              />
            </div>
          );
        })}
      </div>
      <div className={`${style.constructorPriceBlock} pl-4 pr-4`}>
        <div className={`${style.constructorPrice} mr-10`}>
          <span className="text text_type_digits-medium mr-2">610</span>
          <img width={36} height={36} src={Currency} alt="валюта" />
        </div>
        <Button type="primary" size="large">
          Оформить заказ
        </Button>
      </div>
    </section>
  );
}

BurgerConstructor.propTypes = {
  data: PropTypes.arrayOf(ingredientsPropTypes.isRequired),
};

export default BurgerConstructor;
