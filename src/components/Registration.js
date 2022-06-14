import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

const Registration = () => {
  const [username, setUsername] = useState("")
  const [job, setJob] = useState("")
  const [description, setDescription] = useState("")
  const [password, setPassword] = useState("")
  const [isDisabled, setIsDisabled] = useState(false)
  const [isAdmin, setIsAdmin] = useState(false)
  const history = useHistory();
  function register(event) {
    event.preventDefault()
    const users = JSON.parse(localStorage.getItem("users")) || []
    if (username.length && job.length && description.length && password.length) {
      const user = users.find(user => user.username == username)
      if (user) {
        alert("Пользователь с таким именем уже существует")
      } else {
        const newUser = {
          id: Date.now(), //4546545
          username: username,
          job: job,
          description: description,
          password: password,
          isAdmin: isAdmin
        }

        users.push(newUser)
        localStorage.setItem("users", JSON.stringify(users))
        clearForm()
        history.push("/login")
        window.location.reload()
      }
    } else {
      alert("Зфполните все данные")
      setIsDisabled(true)
      setTimeout(() => {
        setIsDisabled(false)
      }, 3000);
    }
  }

  function clearForm() {
    setUsername("")
    setJob("")
    setDescription("")
    setPassword("")
  }

  function onChange(){
    setIsAdmin(!isAdmin);
    console.log(isAdmin);
  }

  return (
    <div className='d-flex flex-column align-items-center'>
      <h2>Registration</h2>
      <form onSubmit={register} style={{ width: "400px" }}>
        <div className="form-group">
          <label>Username</label>
          <input
            className='form-control'
            type="search"
            placeholder='Enter your username'
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
        </div>
        <div className='form-group'>
          <label>Password</label>
          <input
            className='form-control'
            type="search"
            placeholder='Enter your password'
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <div className='form-group'>
          <label>Are you Admin? </label>
          <input
            type="checkbox"
            value={isAdmin}
            onChange={() => onChange()}
          />
        </div>
        <button
          type='submit'
          className='btn btn-primary mt-2'
          disabled={isDisabled}
        >
          Register
        </button>
      </form>
    </div>
  )
}

export default Registration