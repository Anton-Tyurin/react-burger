import React, { useContext } from "react";
import style from "./burger-constructor.module.css";
import {
  ConstructorElement,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";
import { ingredientsPropTypes } from "../../prop-types/burger-ingredients-propTypes";
import { IngredientsContext } from "../../services/services";

function BurgerConstructorItems(props) {
  const { ingredientsData } = props;
  const data = useContext(IngredientsContext);
  return (
    <div className={`${style.constructorItems} mb-10`}>
      <ConstructorElement
        thumbnail={data?.buns[0].image}
        price={data?.buns[0].price}
        text={`${data?.buns[0].name} (верх)`}
        isLocked
      />
      <div className={`${style.constructorIngredientsWrapper}`}>
        {ingredientsData?.map((el) => {
          return (
            <div className={`${style.ingredientItem} pl-4 pr-4 `} key={el._id}>
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
        thumbnail={data?.buns[0].image}
        price={data?.buns[0].price}
        text={`${data?.buns[0].name} (низ)`}
        isLocked
      />
    </div>
  );
}

BurgerConstructorItems.propTypes = {
  ingredientsData: PropTypes.arrayOf(ingredientsPropTypes.isRequired),
};

export default BurgerConstructorItems;
