import React from "react";
import style from "./burger-ingredients-block.module.css";
import BurgerIngredientsCard from "../card/burger-ingredients-card";
import PropTypes from "prop-types";
import { ingredientsPropTypes } from "../../../prop-types/burger-ingredients-propTypes";

function BurgerIngredientsList(props) {
  const { data, heading } = props;

  return (
    <div className="mb-2">
      <h3 className="text text_type_main-medium mb-6">{heading}</h3>
      <div className={`${style.blockBody} pl-4 pr-4`}>
        {data.map((e, index) => {
          return (
            <BurgerIngredientsCard
              key={index}
              cardData={e}
            />
          );
        })}
      </div>
    </div>
  );
}

BurgerIngredientsList.propTypes = {
  data: PropTypes.arrayOf(ingredientsPropTypes.isRequired),
  heading: PropTypes.string.isRequired,
};

export default BurgerIngredientsList;
