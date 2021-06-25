import React from "react";
import style from "./burger-ingredients-block.module.css";
import BurgerIngredientsCard from "../card/burger-ingredients-card";
import PropTypes from "prop-types";
import { ingredientsPropTypes } from "../../../prop-types/burger-ingredients-propTypes";

const BurgerIngredientsList = React.forwardRef((props, ref) => {
  const { data, heading, handleListItemClick } = props;

  return (
    <div className="mb-2">
      <h3 ref={ref} className="text text_type_main-medium mb-6">{heading}</h3>
      <div className={`${style.blockBody} pl-4 pr-4`}>
        {data?.map((item) => {
          return (
            <BurgerIngredientsCard
              handleListItemClick={handleListItemClick}
              key={item._id}
              cardData={item}
            />
          );
        })}
      </div>
    </div>
  );
})

BurgerIngredientsList.propTypes = {
  handleListItemClick: PropTypes.func.isRequired,
  data: PropTypes.arrayOf(ingredientsPropTypes.isRequired),
  heading: PropTypes.string.isRequired,
};

export default BurgerIngredientsList;
