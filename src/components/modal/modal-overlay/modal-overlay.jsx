import React, { useCallback, useEffect } from "react";
import style from "./modal-overlay.module.css";
import { ESC_KEY } from "../../../constants/constants";

function ModalOverlay(props) {
  const { onClose } = props;
  const rootHeight = document.getElementById("root").offsetHeight;
  const escFunction = useCallback((event) => {
    if (event.keyCode === ESC_KEY) {
      onClose();
    }
  }, []);

  useEffect(() => {
    document.addEventListener("keydown", escFunction, false);

    return () => {
      document.removeEventListener("keydown", escFunction, false);
    };
  }, []);

  return (
    <>
      <div
        onClick={onClose}
        style={{ height: rootHeight }}
        className={style.modalOverlay}
      />
    </>
  );
}

export default ModalOverlay;
