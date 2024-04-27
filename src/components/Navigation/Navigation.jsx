import { NavLink } from "react-router-dom";

import { useSelector } from "react-redux";
import { selectUserIsSignedIn } from "../../redux/auth/selectors";
import clsx from "classnames";
import css from "./Navigation.module.css";

export const Navigation = () => {
  const getNavLinkClassNames = ({ isActive }) =>
    clsx(css.Nav, {
      [css.active]: isActive,
    });
  const isSignedIn = useSelector(selectUserIsSignedIn);
  return (
    <nav>
      <NavLink to="/" className={getNavLinkClassNames}>
        Home
      </NavLink>
      {isSignedIn && (
        <NavLink to="/contacts" className={getNavLinkClassNames}>
          Contacts
        </NavLink>
      )}
    </nav>
  );
};
