import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Link } from 'react-router-dom'

const Login = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [isDisabled, setIsDisabled] = useState(false)
  const history = useHistory()

  function submit(event) {
    event.preventDefault()
    const users = JSON.parse(localStorage.getItem("users")) || []
    const user = users.find(user=>user.username == username)
    console.log(user);
    if(!user){
      alert("Пользователь не найден");
    }else{
      if(user && user.password == password) {
        localStorage.setItem("isAuth", JSON.stringify(true))
        localStorage.setItem("currentUser", JSON.stringify(user)); 
        history.push("/")
        window.location.reload() // перезагрузка страницы
      } else {
        alert("Не верный пароль!")
        setIsDisabled(true)
        setTimeout(() => {
          setIsDisabled(false)
        }, 3000);
      }
    }
  }
  
  return (
    <div className='d-flex flex-column align-items-center' >
      <h2>Login</h2>
      <form onSubmit={submit} style={{ width: '600px' }}>
        <div className="form-group">
          <label>Username</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter your username"
            onChange={event => setUsername(event.target.value)}
            value={username}
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter password"
            onChange={event => setPassword(event.target.value)}
            value={password}
          />
        </div>
        <button disabled={isDisabled} type="submit" className="btn btn-primary mt-3">Login</button>
      </form>
      <p>
        Нет аккаунта? <Link to="/register">Регистрация</Link>
      </p>
    </div>
  )
}

export default Login