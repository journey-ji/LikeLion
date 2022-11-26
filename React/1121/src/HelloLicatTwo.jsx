import { useContext } from "react";
import UserInfo from "./context";
const HelloLicatTwo = ()=>{
    const {name,id} = useContext(UserInfo)
    return (
      <>
        <h2>Two : {id}</h2>
        <strong>Two : {name}</strong>
      </>
    )
  }

export default HelloLicatTwo;