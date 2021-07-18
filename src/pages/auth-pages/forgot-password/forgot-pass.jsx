import React, { useCallback, useEffect } from "react";
import styles from "../auth.module.css";
import {
  Button,
  EmailInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { Link, useHistory } from "react-router-dom";
import {
  FORGOT_PASSWORD_TO_INITIAL,
  requestPasswordCode,
} from "../../../services/actions/forgot-password";
import { useDispatch, useSelector } from "react-redux";

export function ForgotPasswordPage() {
  const [formData, setFormData] = React.useState({ email: "" });
  const dispatch = useDispatch();
  const history = useHistory();
  const { successfullySendCode } = useSelector(
    (store) => store.forgotPasswordReducer
  );

  useEffect(() => {
    if (successfullySendCode) {
      dispatch({ type: FORGOT_PASSWORD_TO_INITIAL });
      history.push("/reset-password");
    }
  }, [successfullySendCode]);

  const onChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const onSubmit = useCallback(
    (e) => {
      const { email } = formData;
      e.preventDefault();
      dispatch(requestPasswordCode(email));
    },
    [formData]
  );

  return (
    <div className={styles.passwordPageWrapper}>
      <form onSubmit={onSubmit} className={`${styles.passwordWrapper}`}>
        <h2 className={`text text_type_main-default`}>Восстановление пароля</h2>
        <EmailInput
          placeholder="Укажите e-mail"
          onChange={onChange}
          name={"email"}
          value={formData.email}
        />
        <Button type="primary" size="large">
          Восстановить
        </Button>
      </form>
      <div className={styles.secondaryLinksWrapper}>
        <span className="text text_type_main-default text_color_inactive">
          Вспомнили пароль?
        </span>
        <Link to="/login">
          <Button type="secondary" size="medium">
            Войти
          </Button>
        </Link>
      </div>
    </div>
  );
}
