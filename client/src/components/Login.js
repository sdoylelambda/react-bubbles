import React from 'react'
import axios from 'axios'

const Login = () => {
  // make a post request to retrieve a token from the api
  const token = ''
  // axios.get(`http://localhost:3000/api/login`)// .then .catch
  console.log(token)
  // when you have handled the token, navigate to the BubblePage route
  if (token) {
    return (
      <>
        <h1>hi</h1>
      </>
    )
  } else {
    return (
      <>
        <h1>Welcome to the Bubble App!</h1>
        <p>Build a login page here</p>
      </>
    )
  }
}

export default Login
