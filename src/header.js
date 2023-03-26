import { useContext, useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { UserContext } from "./UserContext"

export const Header = () => {
  const {setUserInfo, userInfo} = useContext(UserContext)
  useEffect(() => {
    fetch('https://blog3-1bfq.onrender.com/profile', {
      credentials: 'include',
    }).then(response => {
      response.json().then(userInfo => {
        setUserInfo(userInfo)
      })
    })
  }, [])

  function logout () {
    fetch('https://blog3-1bfq.onrender.com/logout', {
      credentials: 'include',
      method: 'POST',
    })
    setUserInfo(null)
  }

  //const username = userInfo.username ? userInfo.username : null
  const username = userInfo?.username

    return (
      <header>
        <Link to="/" className="logo">MyBlog</Link>
        <nav>
          {username && (
            <>
              <Link to="/create">Create New Post</Link>
              {/* <Link to>{username}</Link> */}
              <h3>{username}</h3>
              <a onClick={logout}>Logout</a>
            </>
          )}
          {!username && (
            <>
              <Link to="/login">Login</Link>
              <Link to="/register">Register</Link>
            </>
          )}
        </nav>
      </header>
    )
}