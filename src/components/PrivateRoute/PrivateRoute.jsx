import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import {
  selectUserIsRefreshing,
  selectUserIsSignedIn,
} from "../../redux/auth/selectors";

const PrivateRoute = ({ children, redirectTo = "/login" }) => {
  const isSignedIn = useSelector(selectUserIsSignedIn);
  /*   const isRefreshing = useSelector(selectUserIsRefreshing); */

  return isSignedIn /* && isRefreshing */ ? (
    children
  ) : (
    <Navigate to={redirectTo} />
  );
};

export default PrivateRoute;
