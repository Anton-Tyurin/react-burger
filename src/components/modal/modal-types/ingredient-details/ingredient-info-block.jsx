import React from "react";
import style from "./ingredient-details.module.css";
import IngredientInfoItem from "./ingredient-info-item";
import { useSelector } from "react-redux";

function IngredientInfoBlock() {
  const { activeIngredient } = useSelector(
    (store) => store.burgerActiveIngredientReducer
  );
  return (
    <ul className={`${style.detailsInfo} mb-15`}>
      <IngredientInfoItem
        heading={"Калории, ккал"}
        value={activeIngredient.calories}
      />
      <IngredientInfoItem
        heading={"Белки, г"}
        value={activeIngredient.proteins}
      />
      <IngredientInfoItem heading={"Жиры, г"} value={activeIngredient.fat} />
      <IngredientInfoItem
        heading={"Углеводы, ккал"}
        value={activeIngredient.carbohydrates}
      />
    </ul>
  );
}

export default IngredientInfoBlock;
