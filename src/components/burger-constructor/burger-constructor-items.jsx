import React from "react";
import style from "./burger-constructor.module.css";
import {
  ConstructorElement,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";
import { ingredientsPropTypes } from "../../prop-types/burger-ingredients-propTypes";

function BurgerConstructorItems(props) {
  const { dataIngredients, dataBuns } = props;
  return (
    <div className={`${style.constructorItems} mb-10`}>
      <ConstructorElement
        thumbnail={dataBuns[0].image}
        price={dataBuns[0].price}
        text={dataBuns[0].name}
        isLocked
      />
      <div className={`${style.constructorIngredientsWrapper}`}>
        {dataIngredients?.map((el, index) => {
          return (
            <div className={`${style.ingredientItem} pl-4 pr-4 `} key={index}>
              <DragIcon type={"primary"} />
              <ConstructorElement
                thumbnail={el.image}
                price={el.price}
                text={el.name}
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
  );
}

BurgerConstructorItems.propTypes = {
  dataIngredients: PropTypes.arrayOf(ingredientsPropTypes.isRequired),
  dataBuns: PropTypes.arrayOf(ingredientsPropTypes.isRequired),
};

export default BurgerConstructorItems;
