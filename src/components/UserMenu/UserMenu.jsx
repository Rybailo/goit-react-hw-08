import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { apiLogOutUser } from "../../redux/auth/operations";
import { selectUserData } from "../../redux/auth/selectors";
import css from "./UserMenu.module.css";

const UserMenu = () => {
  const userData = useSelector(selectUserData);
  const dispatch = useDispatch();
  const onLogOut = () => {
    dispatch(apiLogOutUser());
  };
  return (
    <div>
      <span className={css.authUser}>Hello {userData.name}!</span>
      <button onClick={onLogOut} type="button">
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
