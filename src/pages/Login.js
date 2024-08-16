import React from 'react'
import Template from '../Components/Templete'
import loginImg from '../assets/login.jpg';

const Login = ({setIsLoggedIn}) => {
  return (
    <Template
      title="Welcome Back"
      desc1="Late night at office?"
      desc2="Order food from favorite restaurants near you."
      image={loginImg}
      formtype="login"
      setIsLoggedIn={setIsLoggedIn}
    />
  )
}

export default Login