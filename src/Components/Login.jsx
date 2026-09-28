import { useState } from "react"

export const Login = () => {
  const [login, setLogin] = useState(true);
  const handleLogin = () => {
    setLogin(!login)
  }
  return <button onClick={handleLogin}>{login ? "Login" : "Logout"}</button>
}