import React, { useState, useEffect } from "react";
import style from "./app.module.css";
import AppHeader from "../app-header/app-header";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";

function App() {
  const [fetchedData, setFetchedData] = useState<any>([]);
  const url = "https://norma.nomoreparties.space/api/ingredients";

  const getData = () => {
    fetch(url)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(res.status);
      })
      .then((res) => {
        setFetchedData(res);
      })
      .catch((e) => {
        console.error("error during request:", e);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className="App">
        <AppHeader />
        <main className={`${style.main} mb-5`}>
          {fetchedData?.data && fetchedData?.success && (
            <>
              <BurgerIngredients data={fetchedData.data} />
              <BurgerConstructor data={fetchedData.data} />
            </>
          )}
        </main>
      </div>
      <div id="react-modals" />
    </>
  );
}

export default App;
