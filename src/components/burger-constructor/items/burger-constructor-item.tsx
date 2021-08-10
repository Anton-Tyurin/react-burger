import React, { useRef } from "react";
import style from "../burger-constructor.module.css";
import {
  ConstructorElement,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useDispatch } from "react-redux";
import {
  moveIngredients,
  removeConstructorIngredient,
} from "../../../services/actions/burger-constructor";
import { useDrag, useDrop } from "react-dnd";
import { TDropIngredient } from "../../../types/types";

type TProps = {
  text: string;
  price: number;
  thumbnail: string;
  id: string | undefined;
  index: number;
};

const BurgerConstructorItem: React.FC<TProps> = (props) => {
  const { text, price, thumbnail, id, index } = props;
  const dispatch = useDispatch();
  const handleItemDelete: () => void = () => {
    id && dispatch(removeConstructorIngredient(id));
  };

  const activeDragItem = useRef<HTMLDivElement | null>(null);
  const [, dropRef] = useDrop({
    accept: "ingredientSort",
    hover(item: TDropIngredient, monitor: any) {
      const dragIndex = item.index;
      const hoverIndex = index;

      if (dragIndex === hoverIndex) {
        return;
      }
      if (!activeDragItem?.current) {
        return;
      }
      const node = activeDragItem.current.querySelector("div");
      if (node) {
        const hoverBoundingRect = node.getBoundingClientRect();
        const hoverMiddleY =
          (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
        const clientOffset = monitor.getClientOffset();
        const hoverClientY = clientOffset.y - hoverBoundingRect.top;

        if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
          return;
        }
        if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
          return;
        }
        dispatch(moveIngredients(dragIndex, hoverIndex));
        monitor.getItem().index = hoverIndex;
      }
    },
  });

  const [{ isDragging }, dragRef] = useDrag({
    type: "ingredientSort",
    item: { id, index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const opacity = isDragging ? 0 : 1;
  return (
    <div ref={dropRef} className={`${style.ingredientItem} pl-4 pr-4 `}>
      <div ref={activeDragItem}>
        <div style={{ ...style, opacity }} ref={dragRef}>
          <DragIcon type={"primary"} />
          <ConstructorElement
            thumbnail={thumbnail}
            price={price}
            text={text}
            handleClose={handleItemDelete}
          />
        </div>
      </div>
    </div>
  );
};

export default BurgerConstructorItem;
