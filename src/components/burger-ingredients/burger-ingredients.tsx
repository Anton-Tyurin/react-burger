import React, {
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import style from "./burger-ingredients.module.css";
import Tabs from "./burger-ingredients-tabs";
import BurgerIngredientsList from "./blocks/burger-ingredients-list";
import { TABS_VALUE } from "../../constants/constants";
import { TBurgerIngredient, useSelector } from "../../types/types";

const BurgerIngredients: React.FC = () => {
  const [ingredientsCoordinates, setIngredientsCoordinates] = useState<{
    bunsBlockTop?: number;
    saucesBlockTop?: number;
    toppingsBlockTop?: number;
  }>({});
  const { ingredientsData } = useSelector<{ingredientsData: TBurgerIngredient[]}>(
    (store) => store.burgerIngredientsReducer
  );
  const [activeTab, setActiveTab] = React.useState(TABS_VALUE.BUNS);

  const tabBunsRef = useRef<HTMLDivElement | null>(null);
  const tabSaucesRef = useRef<HTMLDivElement | null>(null);
  const tabToppingsRef = useRef<HTMLDivElement | null>(null);

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

  const handleOnIngredientsScroll = (el: React.UIEvent<HTMLElement>) => {
    const scrollTop = el.currentTarget.scrollTop;
    const { bunsBlockTop, saucesBlockTop, toppingsBlockTop } =
      ingredientsCoordinates;
    switch (true) {
      case bunsBlockTop && scrollTop < bunsBlockTop: {
        setActiveTab(TABS_VALUE.BUNS);
        break;
      }
      case bunsBlockTop &&
        saucesBlockTop &&
        scrollTop > bunsBlockTop &&
        scrollTop < saucesBlockTop: {
        setActiveTab(TABS_VALUE.SAUCES);
        break;
      }
      case toppingsBlockTop && scrollTop > toppingsBlockTop: {
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

  const bunsData = ingredientsData?.filter(
    (item: TBurgerIngredient) => item.type === "bun"
  );
  const saucesData = ingredientsData?.filter(
    (item: TBurgerIngredient) => item.type === "sauce"
  );
  const toppingsData = ingredientsData?.filter(
    (item: TBurgerIngredient) => item.type === "main"
  );

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
          heading={"Булки"}
          data={bunsData}
        />
        <BurgerIngredientsList
          ref={tabSaucesRef}
          heading={"Соусы"}
          data={saucesData}
        />
        <BurgerIngredientsList
          ref={tabToppingsRef}
          heading={"Начинки"}
          data={toppingsData}
        />
      </div>
    </section>
  );
};

export default BurgerIngredients;
