import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./not-found.module.css"

export const NotFoundPage: React.FC = () =>  {
  return (
    <div className={styles.notFoundPageWrapper}>
      <h2 className={`text text_type_main-large mb-10 ${styles.notFoundPageHeading}`}>Страница не найдена.</h2>
      <div className={styles.helpDescriptionWrapper}>
        <span className="text text_type_main-default text_color_inactive">
          Вернуться на главную?
        </span>
        <Link to="/">
          <Button type="secondary" size="medium">
            Вернуться
          </Button>
        </Link>
      </div>
    </div>
  );
}
