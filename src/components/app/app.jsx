import React from "react";
import style from "./app.module.css";
import AppHeader from "../app-header/app-header";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import { useDispatch, useSelector } from "react-redux";
import { getBurgerIngredients } from "../../services/actions/burger-ingredients";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import BurgerConstructor from "../burger-constructor/burger-constructor";

function App() {
  const { ingredientsData, isLoading } = useSelector(
    (store) => store.burgerIngredientsReducer
  );
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(getBurgerIngredients());
  }, [dispatch]);

  return (
    <>
      <div className="App">
        <AppHeader />
        <main className={`${style.main} mb-5`}>
          {!isLoading && !!ingredientsData?.length && (
            <DndProvider backend={HTML5Backend}>
              <BurgerIngredients />
              <BurgerConstructor />
            </DndProvider>
          )}
        </main>
      </div>
    </>
  );
}

export default App;
