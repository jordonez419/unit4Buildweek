import React from 'react'
import Login from './Login'
import SignUp from './SignUp'

const Account = () => {

  return(
    <div>
      <h2 class="text-center green mon-medium text-uppercase">account</h2>
      <Login />
      <SignUp />
    </div>
  )
}

export default Account