import { useSelector } from "react-redux";

export const getFixedDate = (orderCreateTime) => {
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

export const getOrderData = (orderIngredients) => {
  const { ingredientsData } = useSelector(
    (store) => store.burgerIngredientsReducer
  );
  return orderIngredients?.map((item) =>
    ingredientsData.find((ingredient) => ingredient._id === item)
  );
};

export const getPicturesData = (orderData) => {
  const { ingredientsData } = useSelector(
    (store) => store.burgerIngredientsReducer
  );
  return ingredientsData.filter((val) => orderData.includes(val._id));
};

export const getOrdersStatuses = (ordersAllData) => {
  let doneOrders = [],
    pendingOrders = [];
  for (let i = 0; i < ordersAllData.length; i += 1) {
    if (ordersAllData[i].status === "done" && doneOrders.length < 5) {
      doneOrders.push(ordersAllData[i].number);
    }
    if (ordersAllData[i].status === "pending" && pendingOrders.length < 5) {
      pendingOrders.push(ordersAllData[i].number);
    }
    if (pendingOrders > 4 && doneOrders > 4) {
      break;
    }
  }
  return { doneOrders, pendingOrders };
};

export const getOrderPrice = (orderData) =>
  orderData.reduce((acc, el) => {
    return acc + el?.price;
  }, 0);

export const getStatusName = (orderStatus) => {
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
