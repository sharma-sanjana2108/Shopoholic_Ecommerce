import React, { useEffect, useState } from "react";
import largeimg1 from "../assets/largeimg1.png"
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../features/auth/authSlice";
import { toast } from "react-toastify";

const Register = () => {
  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });

  const { name, email, password, password2 } = formData;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== password2) {
      toast.error("Passwords not matched!!");
    }
    dispatch(registerUser(formData));
  };

  useEffect(() => {
    if (user || isSuccess) {
      navigate("/");
      toast.success("User registered successfully!!")
    }
  }, [user, isSuccess]);

  if (isLoading) {
    return (

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
    );
  }

  return (

    <div className="container login-container mt-5">

    
    <div className="login-img">
    <img className='largeimg1' src={largeimg1} alt="" />
    </div>
    <div className='container side-register'>
    <h3 className='display-7 mt-3'>Welcome to Online Fashion Store!!</h3>
    <p className='lead font-weight-bold'>Please register to your account</p>
      <form className="mt-2" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Name"
          className="form-control rounded-0 my-3"
          name="name"
          value={name}
          onChange={handleChange}
        />

        <input
          type="email"
          placeholder="Enter Email Address"
          className="form-control rounded-0 my-3"
          name="email"
          value={email}
          onChange={handleChange}
        />

        <input
          type="password"
          placeholder="Enter Password"
          className="form-control rounded-0 my-3"
          name="password"
          value={password}
          onChange={handleChange}
        />

        <input
          type="password"
          placeholder="Enter Confirm Password"
          className="form-control rounded-0 my-3"
          name="password2"
          value={password2}
          onChange={handleChange}
        />

        <button className="btn btn-success login-btn text-center w-100 mt-2">
          Register
        </button>
      </form>
    </div>
    </div>
  );
};

export default Register;

