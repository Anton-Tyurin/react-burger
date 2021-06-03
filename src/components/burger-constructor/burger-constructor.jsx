import React from "react";
import style from "./burger-constructor.module.css";
import { ingredientsPropTypes } from "../../prop-types/burger-ingredients-propTypes";
import PropTypes from "prop-types";
import {
  ConstructorElement,
  Button,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import Currency from "../../images/currency.png";

function BurgerConstructor(props) {
  const { data } = props;
  const dataBuns = data.filter((item) => item.type === "bun");
  const dataIngredients = data.filter((item) => item.type !== "bun");
  return (
    <section className={`${style.burgerConstructor} mt-25`}>
      <div className={`${style.constructorItems} mb-10`}>
        <ConstructorElement
          thumbnail={dataBuns[0].image}
          price={dataBuns[0].price}
          text={dataBuns[0].name}
          isLocked
        />
        <div className={`${style.constructorIngredientsWrapper}`}>
          {dataIngredients?.map((item) => {
            return (
              <div className={`${style.ingredientItem} pl-4 pr-4 `} key={item._id}>
                <DragIcon type={"primary"} />
                <ConstructorElement
                  thumbnail={item.image}
                  price={item.price}
                  text={item.name}
                />
              </div>
            );
          })}
        </div>
        <ConstructorElement
          thumbnail={dataBuns[0].image}
          price={dataBuns[0].price}
          text={dataBuns[0].name}
          isLocked
        />
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
