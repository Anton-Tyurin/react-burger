import React from "react";
import style from "./modal.module.css";
import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";

function ModalHeader(props) {
  const { header, onClose } = props;
  return (
    <>
      <div className={`${style.modalHeader} text text_type_main-large pr-10, pl-10 pt-10`}>
        {header && <span>{header}</span>}
        <div className={style.modalCloseIcon}>
          <CloseIcon onClick={onClose} type={"primary"} />
        </div>
      </div>
    </>
  );
}


ModalHeader.propTypes = {
    header: PropTypes.string,
    onClose: PropTypes.func.isRequired,
};

export default ModalHeader;
