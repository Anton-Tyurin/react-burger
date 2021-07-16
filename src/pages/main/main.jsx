import React from "react";
import style from "../../components/app/app.module.css";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import BurgerIngredients from "../../components/burger-ingredients/burger-ingredients";
import BurgerConstructor from "../../components/burger-constructor/burger-constructor";
import { useDispatch, useSelector } from "react-redux";
import { getBurgerIngredients } from "../../services/actions/burger-ingredients";

export function MainPage() {
  const { ingredientsData, isLoading } = useSelector(
    (store) => store.burgerIngredientsReducer
  );
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(getBurgerIngredients());
  }, [dispatch]);

  return (
    <main className={`${style.main} mb-5`}>
      {!isLoading && !!ingredientsData?.length && (
        <DndProvider backend={HTML5Backend}>
          <BurgerIngredients />
          <BurgerConstructor />
        </DndProvider>
      )}
    </main>
  );
}
