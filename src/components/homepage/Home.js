import React from "react";
import Header from "../header/header";
import { useEffect, useState } from "react";
import { useAuth } from "../auth/auth";
import LoadPage from "../listtile/loadlist";
export default function Home() {
  const user = useAuth();

  useEffect(() => {}, []);
  return (
    <div>
      <Header />
      <h2>Contacts</h2>
      <LoadPage />
    </div>
  );
}
