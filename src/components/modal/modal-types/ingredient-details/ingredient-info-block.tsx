import React from "react";
import style from "./ingredient-details.module.css";
import IngredientInfoItem from "./ingredient-info-item";
import { useParams } from "react-router-dom";
import {TBurgerIngredient, useSelector} from "../../../../types/types";
import {RootStateOrAny} from "react-redux";

const IngredientInfoBlock: React.FC = () =>  {
  const { id } = useParams<{ id: string }>();
  const selectedIngredient = useSelector(
    (store: RootStateOrAny) =>
      store.burgerIngredientsReducer.ingredientsData?.filter(
        (el: TBurgerIngredient) => el._id === id
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
