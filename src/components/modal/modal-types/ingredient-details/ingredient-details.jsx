import React from "react";
import style from "./ingredient-details.module.css";
import { ingredientsPropTypes } from "../../../../prop-types/burger-ingredients-propTypes";
import IngredientInfoBlock from "./ingredient-info-block";

function IngredientDetails(props) {
  const { ingredientData } = props;
  return (
    <div className={style.ingredientDetailsWrapper}>
      <img
        className="mb-4 pl-4 pr-4"
        src={ingredientData.image_large}
        alt="ingredient image"
      />
      <h3 className="text text_type_main-medium pl-4 pr-4 mb-8">
        {ingredientData.name}
      </h3>
      <IngredientInfoBlock infoData={ingredientData} />
    </div>
  );
}

IngredientDetails.propTypes = {
  ingredientData: ingredientsPropTypes,
};

export default IngredientDetails;
