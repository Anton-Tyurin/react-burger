import React from "react";
import style from "./ingredient-details.module.css";
import IngredientInfoBlock from "./ingredient-info-block";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

function IngredientDetails() {
  const { id } = useParams();
  const selectedIngredient = useSelector(
    (store) =>
      store.burgerIngredientsReducer.ingredientsData?.filter(
        (el) => el._id === id
      )[0]
  );

  return (
    <div className={style.ingredientDetailsWrapper}>
      <img
        className="mb-4 pl-4 pr-4"
        src={selectedIngredient?.image_large}
        alt="ingredient image"
      />
      <h3 className="text text_type_main-medium pl-4 pr-4 mb-8">
        {selectedIngredient?.name}
      </h3>
      <IngredientInfoBlock />
    </div>
  );
}

export default IngredientDetails;
