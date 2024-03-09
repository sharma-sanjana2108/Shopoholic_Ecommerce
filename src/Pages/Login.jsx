import React, { useEffect, useState } from 'react'
import largeimg1 from "../assets/largeimg1.png"
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { loginUser } from '../features/auth/authSlice'
import { toast } from 'react-toastify'

const Login = () => {

  const {user, isLoading, isError, isSuccess, message} = useSelector((state) => state.auth)

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  })

  const {email, password} = formData

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name] : e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(loginUser(formData))
  }

  useEffect(() => {

    if(user || isSuccess){
      navigate("/")
      toast.success("User login successfully!!")
    }

    if(isError && message){
      toast.error(message)
    }

  }, [user, isLoading, isError, isSuccess])

  if(isLoading){
    return(

      <div className="container-fluid d-flex align-item-center justify-content-center">
      <div class="dot-spinner">
      <div class="dot-spinner__dot"></div>
      <div class="dot-spinner__dot"></div>
      <div class="dot-spinner__dot"></div>
      <div class="dot-spinner__dot"></div>
      <div class="dot-spinner__dot"></div>
      <div class="dot-spinner__dot"></div>
      <div class="dot-spinner__dot"></div>
      <div class="dot-spinner__dot"></div>
  </div>
  </div>
     
    )
  }




  return (
    <>

    <div className="container login-container mt-5">

    
    <div className="login-img">
    <img className='largeimg1' src={largeimg1} alt="" />
    </div>

<div className='container side-login'>
    <h3 className='display-7 mt-3'>Welcome to Online Fashion Store!!</h3>
    <p className='lead font-weight-bold'>Please login to your account</p>
    <form className='mt-3' onSubmit={handleSubmit}>
      
        <input type="email" 
        placeholder='Enter Email Address' 
        className="form-control rounded-0 my-2" 
        name='email'
        value={email}
        onChange={handleChange}/>

        <input type="password"
         placeholder='Enter Password' 
         className="form-control rounded-0 my-3"
         name='password'
         value={password}
         onChange={handleChange} />
         
        <button className='btn btn-success login-btn text-center w-100 mt-2'>Login</button>
    </form>
  
</div>

    </div>
      
    </>
  )
}

export default Login;
