import React from 'react'
import './auth.css'
import Input from '../ui/Input'
const Register = () => {
  return (
    <div className='auth_main'>
      <form>
        <div className="auth_container">
          <div className="auth_header"> </div>
          <div className="auth_item">
            <label> Name * </label>
            <Input placeholder="enter your name" />
          </div>
          <div className="auth_item">
            <label> Email * </label>
            <Input placeholder="enter your name" />
          </div>
          <div className="auth_item">
            <label> Password * </label>
            <Input placeholder="enter your name" />
          </div>
        </div>
      </form>

    </div>
  )
}

export default Register
