import React from "react";
import style from "./ingredient-details.module.css";
import IngredientInfoItem from "./ingredient-info-item";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

function IngredientInfoBlock() {
  const { id } = useParams();
  const selectedIngredient = useSelector(
    (store) =>
      store.burgerIngredientsReducer.ingredientsData?.filter(
        (el) => el._id === id
      )[0]
  );
  return (
    <ul className={`${style.detailsInfo} mb-15`}>
      <IngredientInfoItem
        heading={"Калории, ккал"}
        value={selectedIngredient?.calories}
      />
      <IngredientInfoItem
        heading={"Белки, г"}
        value={selectedIngredient?.proteins}
      />
      <IngredientInfoItem heading={"Жиры, г"} value={selectedIngredient?.fat} />
      <IngredientInfoItem
        heading={"Углеводы, ккал"}
        value={selectedIngredient?.carbohydrates}
      />
    </ul>
  );
}

export default IngredientInfoBlock;
