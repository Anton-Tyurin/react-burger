import {RootState, TBurgerIngredient, TBurgerOrder, useSelector} from "../types/types";

export const getFixedDate = (orderCreateTime: string) => {
  const inputDate = new Date(orderCreateTime);
  const dateNow = new Date();
  const outputDate =
    dateNow.getMonth() === inputDate.getMonth() &&
    dateNow.getDate() === inputDate.getDate()
      ? "Сегодня"
      : `${inputDate.getDate()}-${
          inputDate.getMonth() + 1
        }-${inputDate.getFullYear()}`;
  const outputTime = `${inputDate.getHours()}:${
    inputDate.getMinutes() < 10
      ? `0${inputDate.getMinutes()}`
      : inputDate.getMinutes()
  }`;
  const GMT = dateNow.getHours() - dateNow.getUTCHours();
  return `${outputDate}, ${outputTime} i-GMT${GMT > 0 ? `+${GMT}` : GMT}`;
};

export const getOrderData: (orderIngredients: string[]) => any = (orderIngredients: string[]) => {
  const { ingredientsData } = useSelector<{ingredientsData: TBurgerIngredient[]}>(
    (store: RootState) => store.burgerIngredientsReducer
  );
  return orderIngredients?.map((item: string) =>
    ingredientsData.find((ingredient: TBurgerIngredient) => ingredient._id === item)
  );
};

export const getUnicData = (orderData: string[]) => {
  const { ingredientsData } = useSelector<{ingredientsData: TBurgerIngredient[]}>(
    (store: RootState) => store.burgerIngredientsReducer
  );
  return ingredientsData?.filter((val: TBurgerIngredient) => orderData?.includes(val._id));
};

export const getOrdersStatuses = (ordersAllData: TBurgerOrder[]) => {
  let doneOrders = [],
    pendingOrders = [];
  for (let i = 0; i < ordersAllData.length; i += 1) {
    if (ordersAllData[i].status === "done" && doneOrders.length < 5) {
      doneOrders.push(ordersAllData[i].number.toString());
    }
    if (ordersAllData[i].status === "pending" && pendingOrders.length < 5) {
      pendingOrders.push(ordersAllData[i].number.toString());
    }
    if (pendingOrders.length > 4 && doneOrders.length > 4) {
      break;
    }
  }
  return { doneOrders, pendingOrders };
};

export const getOrderPrice = (orderData: TBurgerIngredient[]) =>
  orderData?.reduce((acc: number, el: TBurgerIngredient) => {
    return acc + el?.price;
  }, 0);

export const getStatusName = (orderStatus: string) => {
  switch (orderStatus) {
    case "done": {
      return "Выполнен";
    }
    case "pending": {
      return "В работе";
    }
    case "created": {
      return "Создан";
    }
    default: {
      return "Отменен";
    }
  }
};
