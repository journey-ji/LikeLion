import { useContext } from "react"
import { Link } from "react-router-dom"
import imgLogo from "../../assets/Logo.svg"
import UserContext from "../../context/UserContext"
import "./header.css"
import Login from "./Login/Login"
import Logout from "./Logout/Logout"

export default function Header() {
  const {isLogin} = useContext(UserContext)
  return (
    <>
      <header>
        <div className="max-width">
          <h1>
            <Link to="/">
              <img src={imgLogo} alt="My Blog" />
            </Link>
          </h1>
          <ul>
            {isLogin? <Login/>:<Logout/> }
          </ul>
        </div>
      </header>
    </>
  )
}
