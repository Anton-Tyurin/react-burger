import React from "react";
import style from "./ingredient-details.module.css";
import IngredientInfoBlock from "./ingredient-info-block";
import { useSelector } from "react-redux";

function IngredientDetails() {
  const { activeIngredient } = useSelector(
    (store) => store.burgerActiveIngredientReducer
  );
  return (
    <div className={style.ingredientDetailsWrapper}>
      <img
        className="mb-4 pl-4 pr-4"
        src={activeIngredient.image_large}
        alt="ingredient image"
      />
      <h3 className="text text_type_main-medium pl-4 pr-4 mb-8">
        {activeIngredient.name}
      </h3>
      <IngredientInfoBlock infoData={activeIngredient} />
    </div>
  );
}

export default IngredientDetails;
