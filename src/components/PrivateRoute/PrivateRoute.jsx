import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { selectUserIsSignedIn } from "../../redux/auth/selectors";

const PrivateRoute = ({ children, redirectTo = "/login" }) => {
  const isSignedIn = useSelector(selectUserIsSignedIn);

  return isSignedIn ? children : <Navigate to={redirectTo} />;
};

export default PrivateRoute;
