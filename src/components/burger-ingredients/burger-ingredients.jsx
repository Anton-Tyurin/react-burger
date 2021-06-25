import React, { useCallback, useEffect, useRef, useState } from "react";
import style from "./burger-ingredients.module.css";
import Tabs from "./burger-ingredients-tabs";
import BurgerIngredientsList from "./blocks/burger-ingredients-list";
import Modal from "../modal/modal";
import IngredientDetails from "../modal/modal-types/ingredient-details/ingredient-details";
import {useDispatch, useSelector} from "react-redux";
import { TABS_VALUE } from "../../constants/constants";
import {INGREDIENT_DETAILS_CLEAR_DATA, INGREDIENT_DETAILS_SET_DATA} from "../../services/actions/ingredient-details";

function BurgerIngredients() {
  const dispatch = useDispatch();
  const [ingredientsCoordinates, setIngredientsCoordinates] = useState({});
  const { ingredientsData } = useSelector(
    (store) => store.burgerIngredientsReducer
  );
  const { activeIngredient } = useSelector(
    (store) => store.burgerActiveIngredientReducer
  );

  const [activeTab, setActiveTab] = React.useState(TABS_VALUE.BUNS);

  const tabBunsRef = useRef(null);
  const tabSaucesRef = useRef(null);
  const tabToppingsRef = useRef(null);

  useEffect(() => {
    const bunsBlockTop = tabBunsRef.current?.getBoundingClientRect().top;
    const saucesBlockTop = tabSaucesRef.current?.getBoundingClientRect().top;
    const toppingsBlockTop =
      tabToppingsRef.current?.getBoundingClientRect().top;
    setIngredientsCoordinates({
      bunsBlockTop,
      saucesBlockTop,
      toppingsBlockTop,
    });
  }, [tabBunsRef, tabSaucesRef, tabToppingsRef]);

  const handleOnIngredientsScroll = (el) => {
    const scrollTop = el.target.scrollTop;
    const { bunsBlockTop, saucesBlockTop, toppingsBlockTop } =
      ingredientsCoordinates;
    switch (true) {
      case scrollTop < bunsBlockTop: {
        setActiveTab(TABS_VALUE.BUNS);
        break;
      }
      case scrollTop > bunsBlockTop && scrollTop < saucesBlockTop: {
        setActiveTab(TABS_VALUE.SAUCES);
        break;
      }
      case scrollTop > toppingsBlockTop: {
        setActiveTab(TABS_VALUE.TOPPINGS);
        break;
      }
      default:
        return;
    }
  };
  const handleOnTabClick = useCallback(
    (value) => {
      setActiveTab(value);
      if (value === TABS_VALUE.BUNS) {
        tabBunsRef?.current?.scrollIntoView({
          behavior: "smooth",
        });
      } else if (value === TABS_VALUE.SAUCES) {
        tabSaucesRef?.current?.scrollIntoView({
          behavior: "smooth",
        });
      } else if (value === TABS_VALUE.TOPPINGS) {
        tabToppingsRef?.current?.scrollIntoView({
          behavior: "smooth",
        });
      }
    },
    [ingredientsData, setActiveTab]
  );

  const bunsData = ingredientsData?.filter((item) => item.type === "bun");
  const saucesData = ingredientsData?.filter((item) => item.type === "sauce");
  const toppingsData = ingredientsData?.filter((item) => item.type === "main");

  const closeModal = () => {
    dispatch({type: INGREDIENT_DETAILS_CLEAR_DATA});
  };

  const handleListItemClick = React.useCallback((item) => {
      dispatch({type: INGREDIENT_DETAILS_SET_DATA, activeIngredient: item});
  }, []);

  return (
    <section className={`${style.burgerIngredients} mr-10`}>
      <h1 className="text text_type_main-large mt-10 mb-5">Соберите бургер</h1>
      <Tabs activeTab={activeTab} handleOnTabClick={handleOnTabClick} />
      <div
        onScroll={handleOnIngredientsScroll}
        className={style.burgerIngredientsBlocksWrapper}
      >
        <BurgerIngredientsList
          ref={tabBunsRef}
          handleListItemClick={handleListItemClick}
          heading={"Булки"}
          data={bunsData}
        />
        <BurgerIngredientsList
          ref={tabSaucesRef}
          handleListItemClick={handleListItemClick}
          heading={"Соусы"}
          data={saucesData}
        />
        <BurgerIngredientsList
          ref={tabToppingsRef}
          handleListItemClick={handleListItemClick}
          heading={"Начинки"}
          data={toppingsData}
        />
      </div>
      {activeIngredient && (
        <Modal header={"Детали ингредиента"} onClose={closeModal}>
          <IngredientDetails />
        </Modal>
      )}
    </section>
  );
}

export default BurgerIngredients;
