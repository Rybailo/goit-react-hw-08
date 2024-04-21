import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { selectUserData, selectUserIsSignedIn } from "../redux/auth/selectors";

export const Layout = ({ children }) => {
  const isSignedIn = useSelector(selectUserIsSignedIn);
  const userData = useSelector(selectUserData);
  return (
    <div>
      <header>
        {isSignedIn ? (
          <>
            <NavLink to="/home">Home</NavLink>
            <NavLink to="/contacts">Contacts</NavLink>
            <span>Hello {userData.name}!</span>
            <button type="button">Logout</button>
          </>
        ) : (
          <>
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/register">Register</NavLink>
          </>
        )}
      </header>
      <main>{children}</main>
    </div>
  );
};
