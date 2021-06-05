import React, { useState } from "react";
import style from "./burger-ingredients.module.css";
import Tabs from "./burger-ingredients-tabs";
import { data } from "../../utils/data";
import BurgerIngredientsList from "./blocks/burger-ingredients-list";
import PropTypes from "prop-types";
import { ingredientsPropTypes } from "../../prop-types/burger-ingredients-propTypes";
import Modal from "../modal/modal";
import IngredientDetails from "../modal/modal-types/ingredient-details/ingredient-details";

function BurgerIngredients() {
  const [activeIngredient, setActiveIngredient] = useState(null);
  const [visible, setVisible] = useState(false);
  const bunsData = data.filter((item) => item.type === "bun");
  const saucesData = data.filter((item) => item.type === "sauce");
  const toppingsData = data.filter((item) => item.type === "main");

  const openModal = () => {
    setVisible(true);
  };
  const closeModal = () => {
    setVisible(false);
  };

  const handleListItemClick = React.useCallback((item) => {
    setActiveIngredient(item);
    openModal();
  }, []);

  return (
    <section className={`${style.burgerIngredients} mr-10`}>
      <h1 className="text text_type_main-large mt-10 mb-5">Соберите бургер</h1>
      <Tabs />
      <div className={style.burgerIngredientsBlocksWrapper}>
        <BurgerIngredientsList
          handleListItemClick={handleListItemClick}
          heading={"Булки"}
          data={bunsData}
        />
        <BurgerIngredientsList
          handleListItemClick={handleListItemClick}
          heading={"Соусы"}
          data={saucesData}
        />
        <BurgerIngredientsList
          handleListItemClick={handleListItemClick}
          heading={"Начинки"}
          data={toppingsData}
        />
      </div>
      {visible && activeIngredient && (
        <Modal header={"Детали ингредиента"} onClose={closeModal}>
          <IngredientDetails ingredientData={activeIngredient} />
        </Modal>
      )}
    </section>
  );
}

BurgerIngredients.propTypes = {
  data: PropTypes.arrayOf(ingredientsPropTypes.isRequired),
};

export default BurgerIngredients;
