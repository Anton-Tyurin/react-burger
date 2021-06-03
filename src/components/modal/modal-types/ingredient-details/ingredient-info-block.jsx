import React from "react";
import style from "./ingredient-details.module.css";
import IngredientInfoItem from "./ingredient-info-item";
import { ingredientsPropTypes } from "../../../../prop-types/burger-ingredients-propTypes";

function IngredientInfoBlock(props) {
  const { infoData } = props;

  return (
    <ul className={`${style.detailsInfo} mb-15`}>
      <IngredientInfoItem
        heading={"Калории, ккал"}
        value={infoData.calories}
      />
      <IngredientInfoItem
        heading={"Белки, г"}
        value={infoData.proteins}
      />
      <IngredientInfoItem heading={"Жиры, г"} value={infoData.fat} />
      <IngredientInfoItem
        heading={"Углеводы, ккал"}
        value={infoData.carbohydrates}
      />
    </ul>
  );
}

IngredientInfoBlock.propTypes = {
  infoData: ingredientsPropTypes.isRequired,
};

export default IngredientInfoBlock;
