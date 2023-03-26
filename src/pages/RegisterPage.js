import { useState } from "react"

export const RegisterPage = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    async function register (e) {
        e.preventDefault()
        const response = await fetch('https://blog3-1bfq.onrender.com/register', {
            method: 'POST',
            mode: 'no-cors',
            body: JSON.stringify({username: username, password: password}),
            headers: {'Content-Type':'application/json'}
        })
        /* if (response.ok === true) {
            console.log(response)
        } else {
            alert('username')
        } */
        if (response.status === 200) {
            console.log(response)
            alert("Registration Successful")
        } else {
            alert("This username is taken. Please Try another")
        }
    }
    return (
        <>
          <form onSubmit={register}>
            <h1>Register</h1>
            <input type="text" placeholder="username" 
                   value={username}
                   onChange={(e) => {setUsername(e.target.value)}} />
            <input type="password" placeholder="password"
                   value={password}
                   onChange={(e) => {setPassword(e.target.value)}} />
            <button>Register</button>
          </form>
        </>
    )
}