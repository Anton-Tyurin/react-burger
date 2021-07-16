import React from "react";
import style from "./ingredient-page.module.css";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import IngredientPageInfoItem from "./ingredient-page-info-item";

export function IngredientPageInfoBlock() {
  const { id } = useParams();
  const selectedIngredient = useSelector(
    (store) =>
      store.burgerIngredientsReducer.ingredientsData?.filter(
        (el) => el._id === id
      )[0]
  );
  return (
    <ul className={`${style.detailsInfo} mb-15`}>
      <IngredientPageInfoItem
        heading={"Калории, ккал"}
        value={selectedIngredient?.calories}
      />
      <IngredientPageInfoItem
        heading={"Белки, г"}
        value={selectedIngredient?.proteins}
      />
      <IngredientPageInfoItem
        heading={"Жиры, г"}
        value={selectedIngredient?.fat}
      />
      <IngredientPageInfoItem
        heading={"Углеводы, ккал"}
        value={selectedIngredient?.carbohydrates}
      />
    </ul>
  );
}

export default IngredientPageInfoBlock;
