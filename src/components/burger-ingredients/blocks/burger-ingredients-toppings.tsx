import React from "react";
import style from "./burger-ingredients-block.module.css";
import BurgerIngredientsCard from "../card/burger-ingredients-card";
import { ingredientsPropTypes } from "../../../prop-types/burger-ingredients-propTypes";
import PropTypes from "prop-types";

function BurgerIngredientsToppings(props: any) {
  const { toppingsData } = props;
  return (
    <div className="mb-2">
      <h3 className="text text_type_main-medium mb-6">Начинки</h3>{" "}
      <div className={`${style.blockBody} pl-4 pr-4`}>
        {toppingsData.map((e: any, index: number) => {
          return <BurgerIngredientsCard key={index} cardData={e} />;
        })}
      </div>
    </div>
  );
}

BurgerIngredientsToppings.propTypes = {
  toppingsData: PropTypes.arrayOf(ingredientsPropTypes.isRequired),
};

export default BurgerIngredientsToppings;
