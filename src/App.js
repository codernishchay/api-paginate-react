import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import SignInPage from "./components/auth/signInpage";
import Home from "./components/homepage/Home";
import ListTile from "./components/listtile/listTile";

import { AuthContext, AuthProvider, PrivateRoute } from "./components/auth/auth";
export default function App() {
  return (
    <Router>
    <AuthProvider>  
   
      <Routes>
          <Route exact path='/' element={<PrivateRoute/>}>
            <Route exact path='/' element={<Home/>}/>
          </Route>
          {/* <Route path="/ff" element={<ListTile/>}/> */}
         <Route path="/login" element={<SignInPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    
      </AuthProvider>
    </Router>

  );
}

function NotFound() {
  return (
    <div>
      <h1>"Page Not found" </h1>
    </div>
  );
}
