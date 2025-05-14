import React from 'react'
import { useState } from 'react'
import Register from './components/Register';
import Login from './components/Login';

const App = () => {
  const [auth, setAuth] = useState(sessionStorage.getItem("uname_stage") ? "home" : "login");
  return (
    <>
      {auth == "register" && <Register setAuth={setAuth} />}
      {auth == "login" && <Login setAuth={setAuth} />}
      {auth == "home" && <HomePage/>}

    </>
  )
}

export default App
