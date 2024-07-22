import React from "react";

import { Outlet } from "react-router-dom";
import { Navigate } from "react-router-dom";
function Protected() {
  const auth = JSON.parse(localStorage.getItem("token"));
  // console.log(Outlet)
  console.log(auth)
  return auth ? <Outlet /> : <Navigate to={"/Signup"} />;
}

export default Protected;
