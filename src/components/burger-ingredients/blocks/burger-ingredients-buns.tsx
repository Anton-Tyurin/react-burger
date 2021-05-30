import React from "react";
import style from "./burger-ingredients-block.module.css";
import BurgerIngredientsCard from "../card/burger-ingredients-card";
import PropTypes from "prop-types";
import { ingredientsPropTypes } from "../../../prop-types/burger-ingredients-propTypes";

function BurgerIngredientsBuns(props: any) {
  const { bunsData } = props;
  return (
    <div className="mb-2">
      <h3 className="text text_type_main-medium mb-6">Булки</h3>
      <div className={`${style.blockBody} pl-4 pr-4`}>
        {bunsData.map((e: any, index: number) => {
          return <BurgerIngredientsCard key={index} cardData={e} />;
        })}
      </div>
    </div>
  );
}

BurgerIngredientsBuns.propTypes = {
  bunsData: PropTypes.arrayOf(ingredientsPropTypes.isRequired),
};

export default BurgerIngredientsBuns;
