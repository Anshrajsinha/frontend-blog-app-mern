import { useContext, useState } from "react"
import { Navigate } from "react-router-dom";
import { UserContext } from "../UserContext";

export const LoginPage = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [redirect, setRedirect] = useState(false)
    const {setUserInfo} = useContext(UserContext)
    async function login (e) {
      e.preventDefault()
      const res = await fetch('https://blog3-1bfq.onrender.com/login', {
        method: 'POST',
        mode: 'cors',
        body: JSON.stringify({username, password}),
        headers: {'Content-Type':'application/json'},
        credentials: 'include',
      })
      if (res.status === 200) {
        alert("correct password")
        console.log(res)
        /* return (
        <Navigate to="/" replace={true}/>
        ) */
        res.json().then(userInfo => {
          setUserInfo(userInfo)
          setRedirect(true)
        })
      } else {
        alert("wrong password")
        console.log(res)
      }
    }

    if (redirect) {
      return (
        <Navigate to={'/'} />
      )
    }

    return (
        <>
          <form onSubmit={login}>
            <h1>Login</h1>
            <input type="text" placeholder="username"
                   value={username} onChange={e => setUsername(e.target.value)} />
            <input type="password" placeholder="password"
                   value={password} onChange={e => setPassword(e.target.value)} />
            <button>Login</button>
          </form>
        </>
    )
}