import React, { useState, useEffect } from "react";
import style from "./app.module.css";
import AppHeader from "../app-header/app-header";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import { GET_INGREDIENTS_URL, POST_ORDER_URL } from "../../constants/constants";
import { IngredientsContext } from "../../services/services";

function App() {
  const [burgerIngredientsInitialData, setBurgerIngredientsInitialData] =
    useState([]);
  const [burgerActualData, setBurgerActualData] = useState([]);
  const [orderNumber, setOrderNumber] = useState(0);

  const getData = () => {
    fetch(GET_INGREDIENTS_URL)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(res.status);
      })
      .then((res) => {
        setBurgerIngredientsInitialData(res);
      })
      .catch((e) => {
        console.error("error during request:", e);
      });
  };

  const getOrderNumber = () => {
    const orderInfo = burgerActualData?.map((el) => el._id);
    fetch(POST_ORDER_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ingredients: orderInfo }),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        return Promise.reject(res.status);
      })
      .then((res) => {
        setOrderNumber(res?.order?.number);
      })
      .catch((e) => {
        console.error("error during request:", e);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  const buns = burgerIngredientsInitialData?.data?.filter(
    (item) => item.type === "bun"
  );
  const ingredients = burgerIngredientsInitialData?.data?.filter(
    (item) => item.type !== "bun"
  );

  return (
    <>
      <div className="App">
        <AppHeader />
        <main className={`${style.main} mb-5`}>
          {burgerIngredientsInitialData?.data &&
            burgerIngredientsInitialData?.success && (
              <IngredientsContext.Provider value={{ buns, ingredients }}>
                <BurgerIngredients />
                <BurgerConstructor
                  orderNumber={orderNumber}
                  getOrderNumber={getOrderNumber}
                  setBurgerActualData={setBurgerActualData}
                />
              </IngredientsContext.Provider>
            )}
        </main>
      </div>
      <div id="react-modals" />
    </>
  );
}

export default App;
