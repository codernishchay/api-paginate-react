import React, { createContext, useContext } from "react";
import { useState, useEffect } from "react";
import { Navigate, Outlet, useLocation, useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthProvider = (props) => {
  const auth = Auth();

  console.log(auth.user + " check 3");
  return (
    <AuthContext.Provider value={auth}>{props.children}</AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

export const PrivateRoute = () => {
  console.log("Private route");
  const auth = useAuth();
  const location = useLocation();
  console.log("Private route auth " + auth.user);
  console.log(auth.user);
  return auth.user ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} />
  );
};

export default function Auth() {
  const [user, setuser] = useState();
  const navigate = useNavigate();

  const signInwithEmailAndPassword = (email, password) => {
    console.log(email + " " + password);
    if (email === "foo" && "bar" === password) {
      console.log(email + " check 1");
      setuser(email);
      navigate("/");

      console.log(user + "check2");
      return {
        statusCode: 200,
        user: email,
      };
    }
  };

  const logout = () => {
    setuser(null);
    return <Navigate to="/login"></Navigate>;
  };
  return {
    signInwithEmailAndPassword,
    logout,
    user,
  };
}
