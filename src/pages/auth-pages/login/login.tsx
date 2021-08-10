import React, { useCallback, useEffect } from "react";
import styles from "../auth.module.css";
import {
  Button,
  EmailInput,
  PasswordInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { Link, useHistory } from "react-router-dom";
import { AUTH_TO_INITIAL, loginUser } from "../../../services/actions/auth";
import {useDispatch, useSelector} from "../../../types/types";

export const LoginPage: React.FC = () =>  {
  const [formData, setFormData] = React.useState({ password: "", email: "" });
  const dispatch = useDispatch();
  const history = useHistory();
  const { successfulLogin } = useSelector((store) => store.authReducer);

  useEffect(() => {
    if (successfulLogin) {
      dispatch({ type: AUTH_TO_INITIAL });
      history.push("/profile");
    }
  }, [successfulLogin]);

  const onChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const onSubmit = useCallback(
    (e) => {
      const { password, email } = formData;

      e.preventDefault();
      dispatch(loginUser(password, email));
    },
    [formData]
  );

  return (
    <div className={styles.passwordPageWrapper}>
      <form onSubmit={onSubmit} className={`${styles.passwordWrapper}`}>
        <h2 className={`text text_type_main-default`}>Вход</h2>
        <EmailInput
          name="email"
          value={formData.email}
          onChange={onChange}
        />
        <PasswordInput
          name="password"
          value={formData.password}
          onChange={onChange}
        />
        <Button type="primary" size="large">
          Войти
        </Button>
      </form>
      <div className={styles.secondaryLinksWrapper}>
        <span className="text text_type_main-default text_color_inactive">
          Вы — новый пользователь?
        </span>
        <Link to="/register">
          <Button type="secondary" size="medium">
            Зарегистрироваться
          </Button>
        </Link>
      </div>
      <div className={styles.secondaryLinksWrapper}>
        <span className="text text_type_main-default text_color_inactive">
          Забыли пароль?
        </span>
        <Link to="/forgot-password">
          <Button type="secondary" size="medium">
            Восстановить пароль
          </Button>
        </Link>
      </div>
    </div>
  );
}
