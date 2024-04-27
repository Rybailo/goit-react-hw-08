import React from "react";
import { useSelector } from "react-redux";
import { selectUserIsSignedIn } from "../../redux/auth/selectors";
import { AuthNav } from "../AuthNav/AuthNav";
import { Navigation } from "../Navigation/Navigation";
import UserMenu from "../UserMenu/UserMenu";
import css from "./AppBar.module.css";

const AppBar = () => {
  const isSignedIn = useSelector(selectUserIsSignedIn);
  return (
    <div>
      <div className={css.navContainer}>
        <Navigation />
        {isSignedIn ? <UserMenu /> : <AuthNav />}
      </div>
    </div>
  );
};

export default AppBar;
