import {
  Button,
  EmailInput,
  Input,
  PasswordInput,
} from "@ya.praktikum/react-developer-burger-ui-components";
import React, { useEffect } from "react";
import style from "../profile.module.css";
import { useDispatch } from "react-redux";
import {
  getUserCredentials,
  updateUserCredentials,
} from "../../../services/actions/user-profile";
import {getValidatedFields} from "../../../utils/validation";

export function ProfileContentUser() {
  const [userData, setUserData] = React.useState({
    password: "",
    email: "",
    name: "",
  });
  const [reservedUserData, setReservedUserData] = React.useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserCredentials())
      .then((data) => {
        const { email, name } = data;
        setUserData({ email, name, password: "" });
      })
      .catch((e) => console.error(e));
  }, []);

  const onChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const onFocus = () => {
    if (reservedUserData === null) {
      const { email, name } = userData;
      setReservedUserData({ email, name, password: "" });
    }
  };

  const handleOnCancelChanges = () => {
    if (reservedUserData !== null) {
      const { email, name } = reservedUserData;
      setUserData({ email, name, password: "" });
      setReservedUserData(null);
    }
  };

  const handleOnSaveChanges = () => {
    const validatedFields = getValidatedFields(userData);
    dispatch(updateUserCredentials(validatedFields));
    setReservedUserData(null);
  };

  return (
    <div className={style.contentUserWrapper}>
      <Input
        onFocus={onFocus}
        name="name"
        placeholder="Имя"
        value={userData.name}
        onChange={onChange}
      />
      <div onFocus={onFocus}>
        <EmailInput
          name="email"
          placeholder="E-mail"
          value={userData.email}
          onChange={onChange}
        />
      </div>
      <div onFocus={onFocus}>
        <PasswordInput
          onFocus={onFocus}
          name="password"
          placeholder="Пароль"
          value={userData.password}
          onChange={onChange}
        />
      </div>
      <div className={style.contentUserButtons}>
        <Button onClick={handleOnCancelChanges} size="medium" type="secondary">
          Отменить
        </Button>
        <Button onClick={handleOnSaveChanges} size="medium" type="primary">
          Сохранить
        </Button>
      </div>
    </div>
  );
}
