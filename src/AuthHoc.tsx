// import React from "react";
import { Navigate, Outlet } from "react-router-dom";

// const withAuthRedirect = (Component: React.FC) => {
//   return () => {
//     const token = JSON.parse(localStorage.getItem("token") ?? "null");

//     return token ? <Component /> : <Navigate to="/login" />;
//   };
// };

// export default withAuthRedirect;

const PrivateRoutes = () => {
  const token = JSON.parse(localStorage.getItem("token") ?? "null");

  return token ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoutes;
