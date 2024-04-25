import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { selectUserIsSignedIn } from "../redux/auth/selectors";
import UserMenu from "./UserMenu/UserMenu";

const Layout = ({ children }) => {
  const isSignedIn = useSelector(selectUserIsSignedIn);

  return (
    <div>
      <header>
        {isSignedIn ? (
          <>
            <NavLink to="/home">Home</NavLink>
            <NavLink to="/contacts">Contacts</NavLink>
            <UserMenu />
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

export default Layout;
