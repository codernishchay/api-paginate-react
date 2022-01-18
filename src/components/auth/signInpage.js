import React from "react";
import "./auth.css";

import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./auth";

export default function SignInPage() {
  const { register, handleSubmit, watch, errors } = useForm();
  const auth = useAuth();

  const onSubmit = (register) => {
    try {
      const signin = auth.signInwithEmailAndPassword(
        register["email"],
        register["password"]
      );
      console.log(signin);
      if (signin.statusCode === 200) {
        console.log(auth.user); 

         
      } else {
        console.log("Wrong Credentials");
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="content">
      <div className="head">
        <h1>Login</h1>
      </div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="inputs">
          <input type="text" {...register("email")} required="true" /> 
          <br />
          <input type="password" {...register("password")} required="true" />
          <br />
          {/* <button type="submit" value="Login"> Login </button>   */}
          <input type="submit" value="Login" />
        </div>
      </form>
    </div>
  );
}
