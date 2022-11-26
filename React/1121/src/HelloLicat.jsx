import { useContext } from "react"
import UserInfo from "./context"

const HelloLicat = ()=>{
const {name,id} = useContext(UserInfo)
return (
    <>
    <h2>{id}</h2>
    <strong>{name}</strong>
    <HelloLicatTwo />
    </>  
    )
}

export default HelloLicat

