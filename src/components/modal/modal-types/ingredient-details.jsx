import React from "react";
import style from "./ingredient-details.module.css";
import IngredientInfoItem from "./ingredient-info-item";

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
      <ul className={`${style.detailsInfo} mb-15`}>
        <IngredientInfoItem
          heading={"Калории, ккал"}
          value={ingredientData.calories}
        />
        <IngredientInfoItem
          heading={"Белки, г"}
          value={ingredientData.proteins}
        />
        <IngredientInfoItem heading={"Жиры, г"} value={ingredientData.fat} />
        <IngredientInfoItem
          heading={"Углеводы, ккал"}
          value={ingredientData.carbohydrates}
        />
      </ul>
    </div>
  );
}

export default IngredientDetails;
