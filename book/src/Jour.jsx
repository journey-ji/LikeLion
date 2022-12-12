import React from "react";
import { useContext } from "react";
import UserInfo from "./context";

function Jour() {
  const { name, age } = useContext(UserInfo);
  return (
    <div>
      <h2>{name}</h2>
      <strong>{age}</strong>
    </div>
  );
}

export default Jour;
