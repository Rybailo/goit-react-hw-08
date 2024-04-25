import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { selectUserIsSignedIn } from "../../redux/auth/selectors";

const RestrictedRoute = ({ children, redirectTo = "/contacts" }) => {
  const isSignedIn = useSelector(selectUserIsSignedIn);

  return isSignedIn ? <Navigate to={redirectTo} /> : children;
};

export default RestrictedRoute;
