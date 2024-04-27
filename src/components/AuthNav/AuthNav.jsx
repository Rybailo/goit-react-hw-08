import { NavLink } from "react-router-dom";
import css from "./AuthNav.module.css";
import clsx from "classnames";

export const AuthNav = () => {
  const getNavLinkClassNames = ({ isActive }) =>
    clsx(css.Nav, {
      [css.active]: isActive,
    });
  return (
    <div>
      <NavLink to="/register" className={getNavLinkClassNames}>
        Sign Up
      </NavLink>
      <NavLink to="/login" className={getNavLinkClassNames}>
        Log In
      </NavLink>
    </div>
  );
};
