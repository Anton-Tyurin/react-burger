import React from "react";
import style from "./app.module.css";
import AppHeader from "../app-header/app-header";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import { data } from "../../utils/data";

function App() {
  return (
    <div className="App">
      <AppHeader />
      <main className={`${style.main} mb-5`}>
        <BurgerIngredients data={data} />
        <BurgerConstructor data={data}  />
      </main>
    </div>
  );
}

export default App;
