import React from "react";
import { useParams } from "react-router-dom";
import styles from "./ingredient-page.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getBurgerIngredients } from "../../services/actions/burger-ingredients";
import IngredientPageInfoBlock from "./ingredient-page-info-block";

export function IngredientPage() {
  const { id } = useParams();
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(getBurgerIngredients());
  }, []);

  const selectedIngredient = useSelector(
    (store) =>
      store.burgerIngredientsReducer.ingredientsData?.filter(
        (el) => el._id === id
      )[0]
  );
  return (
    <div className={`${styles.ingredientPageWrapper}`}>
      <h2
        className={`${styles.ingredientPageHeading} text text_type_main-large`}
      >
        Детали ингредиента
      </h2>
      <img
        className="mb-4 pl-4 pr-4"
        src={selectedIngredient?.image_large}
        alt="ingredient image"
      />
      <h3
        className={`text text_type_main-medium pl-4 pr-4 mb-8 ${styles.ingredientPageName}`}
      >
        {selectedIngredient?.name}
      </h3>
      <IngredientPageInfoBlock />
    </div>
  );
}
