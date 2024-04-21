import React from "react";
import { useDispatch } from "react-redux";
import { LoginForm } from "../../components/LoginForm/LoginForm";
import { apiLoginUser } from "../../redux/auth/operations";

const login = () => {
  const dispatch = useDispatch();

  const onLoginUser = (formData) => {
    dispatch(apiLoginUser(formData));
  };
  return (
    <div>
      <LoginForm onLoginUser={onLoginUser} />
    </div>
  );
};

export default login;
