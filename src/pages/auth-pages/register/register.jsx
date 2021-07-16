import React, { useCallback, useEffect } from "react";
import { useHistory } from "react-router-dom";
import styles from "../auth.module.css";
import {
  Button,
  EmailInput,
  Input,
  PasswordInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  REGISTER_TO_INITIAL,
  registerUser,
} from "../../../services/actions/register";

export function RegisterPage() {
  const [formData, setFormData] = React.useState({
    password: "",
    email: "",
    name: "",
  });
  const dispatch = useDispatch();
  const history = useHistory();
  const { successfulRegistration } = useSelector(
    (store) => store.registerReducer
  );

  useEffect(() => {
    if (successfulRegistration) {
      dispatch({ type: REGISTER_TO_INITIAL });
      history.push("/login");
    }
  }, [successfulRegistration]);

  const onChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const onSubmit = useCallback(
    (e) => {
      const { password, email, name } = formData;

      e.preventDefault();
      dispatch(registerUser(password, email, name));
    },
    [formData]
  );

  return (
    <div className={styles.passwordPageWrapper}>
      <form onSubmit={onSubmit} className={`${styles.passwordWrapper}`}>
        <h2 className={`text text_type_main-default`}>Вход</h2>
        <Input
          name="name"
          placeholder="Имя"
          value={formData.name}
          onChange={onChange}
        />
        <EmailInput
          name="email"
          placeholder="E-mail"
          value={formData.email}
          onChange={onChange}
        />
        <PasswordInput
          name="password"
          placeholder="Пароль"
          value={formData.password}
          onChange={onChange}
        />
        <Button type="primary" size="large">
          Зарегистрироваться
        </Button>
      </form>
      <div className={styles.secondaryLinksWrapper}>
        <span className="text text_type_main-default text_color_inactive">
          Уже зарегистрированны?
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
