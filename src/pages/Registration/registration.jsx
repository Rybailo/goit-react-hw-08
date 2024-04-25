import React from "react";
import { useDispatch } from "react-redux";
import RegisterForm from "../../components/RegisterForm/RegisterForm";
import { apiRegisterUser } from "../../redux/auth/operations";

const registration = () => {
  const dispatch = useDispatch();

  const onRegisterUser = (formData) => {
    dispatch(apiRegisterUser(formData));
  };
  return (
    <div>
      Register
      <RegisterForm onRegisterUser={onRegisterUser} />
    </div>
  );
};

export default registration;
