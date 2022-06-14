import React, { useEffect, useState } from 'react'
import { useRouteMatch } from 'react-router-dom'
import { useHistory } from 'react-router-dom'
import { Link } from 'react-router-dom'

const Header = () => {
  const [isAuth, setIsAuth] = useState(true)
  const [isAdmin, setIsAdmin] = useState()

  useEffect(() => {
    const auth = JSON.parse(localStorage.getItem("isAuth"))
    const currentUser = JSON.parse(localStorage.getItem("currentUser"))
    setIsAuth(auth)
    setIsAdmin(currentUser.isAdmin)
    console.log(isAdmin);
    window.addEventListener("storage", ()=>{
      let newAuth = JSON.parse(localStorage.getItem("isAuth"))
      setIsAuth(isAuth)
    })
  }, [])
  
  const history = useHistory()
  const { path } = useRouteMatch();

  function active(url) {
    if (history.location.pathname == url) {
      return "blue"
    } else {
      return "black"
    }
  }

  function logout() {
    setIsAuth(false)
    localStorage.setItem("isAuth", false)
    history.push("/")
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light container">
      <div className="collapse navbar-collapse d-flex justify-content-between" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/" style={{ color: active(path + "/") }}>Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/shop" style={{ color: active(path + "shop") }}>Shop</Link>
          </li>
          {
            isAuth === true  && isAdmin ? <>
              <li className="nav-item">
                <Link className="nav-link" to="/product-create" style={{ color: active(path + "product-create") }}>Create product</Link>
              </li>
            </> : ''
          }
        </ul>
        {
          isAuth ? <>
            <button className='btn btn-primary' onClick={() => logout()}>
              Logout
            </button>
          </>
          :
          <>
            <Link className="nav-link" to="/login" style={{ color: active(path + "login") }}>
              <button className='btn btn-primary'>
                Login
              </button>
            </Link>
          </>
        }
      </div>
    </nav>
  )
}

export default Header