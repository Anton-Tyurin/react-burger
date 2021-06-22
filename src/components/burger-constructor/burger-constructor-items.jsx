import React, { useContext, useEffect, useState } from "react";
import style from "./burger-constructor.module.css";
import {
  ConstructorElement,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";
import { IngredientsContext } from "../../services/services";

function BurgerConstructorItems(props) {
  const { setBurgerActualData, setOrderPrice } = props;
  const data = useContext(IngredientsContext);

  // TODO: для имитации разного набора заказа и его суммы;
  const [randomIngredients] = useState([...data?.ingredients]);
  useEffect(() => {
    randomIngredients.length = Math.floor(
      Math.random() * data?.ingredients?.length
    );
    setOrderPrice(
      randomIngredients.reduce((acc, el) => {
        return acc + el.price;
      }, data?.buns[0]?.price * 2)
    );

    const burgerActualData = [...data?.buns, ...randomIngredients];
    setBurgerActualData(burgerActualData);
  }, []);

  return (
    <div className={`${style.constructorItems} mb-10`}>
      <ConstructorElement
        thumbnail={data?.buns[0].image}
        price={data?.buns[0].price}
        text={`${data?.buns[0].name} (верх)`}
        isLocked
      />
      <div className={`${style.constructorIngredientsWrapper}`}>
        {randomIngredients?.map((el) => {
          return (
            <div className={`${style.ingredientItem} pl-4 pr-4 `} key={el._id}>
              <DragIcon type={"primary"} />
              <ConstructorElement
                thumbnail={el.image}
                price={el.price}
                text={el.name}
              />
            </div>
          );
        })}
      </div>
      <ConstructorElement
        thumbnail={data?.buns[0].image}
        price={data?.buns[0].price}
        text={`${data?.buns[0].name} (низ)`}
        isLocked
      />
    </div>
  );
}

BurgerConstructorItems.propTypes = {
  setOrderPrice: PropTypes.func,
  setBurgerActualData: PropTypes.func,
};

export default BurgerConstructorItems;
