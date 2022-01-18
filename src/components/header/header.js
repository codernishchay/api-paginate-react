import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../auth/auth";
import "./header.css";
export default function Header() {
  const auth = useAuth();
  const handleLogout = () => {
    auth.logout();
    console.log(auth);
    console.log(auth.user);
    return <Navigate to="/login" />;
  };

  return (
    <div>
      <header className="header">
        <nav className="nav">
          <div className="logo">Paginate It</div>
          <ul>
            <button onClick={handleLogout}>Log out</button>
          </ul>
        </nav>
      </header>
    </div>
  );
}
