import { useEffect } from "react";
import { isAuth } from "actions/auth";
import Router from "next/router";

// core components

const AuthRoute = ({ children }) => {
  useEffect(() => {
    if (!isAuth()) {
      Router.push("/auth/login");
    }
  }, []);

  return (
    <>
      <div className="main-content">{children}</div>
    </>
  );
};

export default AuthRoute;
