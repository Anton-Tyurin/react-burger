import React from "react";
import style from "./burger-ingredients.module.css";
import Tabs from "./burger-ingredients-tabs";
import { data } from "../../utils/data";
import BurgerIngredientsBuns from "./blocks/burger-ingredients-buns";
import PropTypes from "prop-types";
import BurgerIngredientsSauces from "./blocks/burger-ingredients-sauces";
import BurgerIngredientsToppings from "./blocks/burger-ingredients-toppings";
import { ingredientsPropTypes } from "../../prop-types/burger-ingredients-propTypes";

function BurgerIngredients() {
  const bunsData = data.filter((e) => e.type === "bun");
  const saucesData = data.filter((e) => e.type === "sauce");
  const toppingsData = data.filter((e) => e.type === "main");

  return (
    <section className={`${style.burgerIngredients} mr-10`}>
      <h2 className="text text_type_main-large mt-10 mb-5">Соберите бургер</h2>
      <Tabs />
      <div className={style.burgerIngredientsBlocksWrapper}>
        <BurgerIngredientsBuns bunsData={bunsData} />
        <BurgerIngredientsSauces saucesData={saucesData} />
        <BurgerIngredientsToppings toppingsData={toppingsData} />
      </div>
    </section>
  );
}

BurgerIngredients.propTypes = {
  data: PropTypes.arrayOf(ingredientsPropTypes.isRequired),
};

export default BurgerIngredients;
