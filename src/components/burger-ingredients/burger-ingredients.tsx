import React from "react";
import style from "./burger-ingredients.module.css";
import Tabs from "./burger-ingredients-tabs";
import { data } from "../../utils/data";
import BurgerIngredientsList from "./blocks/burger-ingredients-list";
import PropTypes from "prop-types";
import { ingredientsPropTypes } from "../../prop-types/burger-ingredients-propTypes";

function BurgerIngredients() {
  const bunsData = data.filter((item) => item.type === "bun");
  const saucesData = data.filter((item) => item.type === "sauce");
  const toppingsData = data.filter((item) => item.type === "main");

  return (
    <section className={`${style.burgerIngredients} mr-10`}>
      <h1 className="text text_type_main-large mt-10 mb-5">Соберите бургер</h1>
      <Tabs />
      <div className={style.burgerIngredientsBlocksWrapper}>
        <BurgerIngredientsList heading={"Булки"} data={bunsData} />
        <BurgerIngredientsList heading={"Соусы"} data={saucesData} />
        <BurgerIngredientsList heading={"Начинки"} data={toppingsData} />
      </div>
    </section>
  );
}

BurgerIngredients.propTypes = {
    data: PropTypes.arrayOf(ingredientsPropTypes.isRequired),
};

export default BurgerIngredients;
