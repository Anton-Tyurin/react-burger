import React, { useCallback, useEffect } from "react";
import styles from "../auth.module.css";
import {
  Button,
  Input,
  PasswordInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { Link, useHistory } from "react-router-dom";
import {
  RESET_PASSWORD_TO_INITIAL,
  resetPassword,
} from "../../../services/actions/reset-password";
import { useDispatch, useSelector } from "../../../types/types";

export const ResetPasswordPage: React.FC = () =>  {
  const [formData, setFormData] = React.useState({
    password: "",
    token: "",
    code: "",
  });
  const dispatch = useDispatch();
  const history = useHistory();
  const { successfullyChangedPassword } = useSelector(
    (store) => store.resetPasswordReducer
  );

  useEffect(() => {
    if (successfullyChangedPassword) {
      dispatch({ type: RESET_PASSWORD_TO_INITIAL });
      history.push("/login");
    }
  }, [successfullyChangedPassword]);

  const onChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const onSubmit = useCallback(
    (e) => {
      const { password, token } = formData;

      e.preventDefault();
      dispatch(resetPassword(password, token));
    },
    [formData]
  );

  return (
    <div className={styles.passwordPageWrapper}>
      <form onSubmit={onSubmit} className={`${styles.passwordWrapper}`}>
        <h2 className={`text text_type_main-default`}>Восстановление пароля</h2>
        <PasswordInput
          name="password"
          value={formData.password}
          onChange={onChange}
        />
        <Input name="token" value={formData.code} onChange={onChange} />
        <Button type="primary" size="large">
          Сохранить
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
