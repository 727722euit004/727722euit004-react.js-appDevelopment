import React from 'react'
import Template from '../Components/Templete'
import signupImg from '../assets/password.jpg'

const Signup = ({setIsLoggedIn}) => {
  return (
   <Template
    title = "Restaurants in your pocket"
    desc1 = "Order from your favorite restaurants & track on the go."
    desc2 = "EXPLORE EVERY RESTAURANTS NEAR ME"
    formtype = "signup"
    image = {signupImg}
    setIsLoggedIn = {setIsLoggedIn}
   />
  )
}

export default Signup