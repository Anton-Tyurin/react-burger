import React from "react";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import { TABS_VALUE } from "../../constants/constants";
import PropTypes from "prop-types";

function Tabs(props) {
  const { handleOnTabClick, activeTab } = props;
  return (
    <div className="mb-10" style={{ display: "flex" }}>
      <Tab
        value={TABS_VALUE.BUNS}
        active={activeTab === TABS_VALUE.BUNS}
        onClick={handleOnTabClick}
      >
        Булки
      </Tab>
      <Tab
        value={TABS_VALUE.SAUCES}
        active={activeTab === TABS_VALUE.SAUCES}
        onClick={handleOnTabClick}
      >
        Соусы
      </Tab>
      <Tab
        value={TABS_VALUE.TOPPINGS}
        active={activeTab === TABS_VALUE.TOPPINGS}
        onClick={handleOnTabClick}
      >
        Начинки
      </Tab>
    </div>
  );
}

Tabs.propTypes = {
  handleOnTabClick: PropTypes.func.isRequired,
  activeTab: PropTypes.string.isRequired,
};

export default Tabs;
