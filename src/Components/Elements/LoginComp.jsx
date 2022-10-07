import React from "react";
import {FcGoogle} from 'react-icons/fc'
import {Link} from "react-router-dom"
const LoginComp = () => {
  return (
    <>
      <div className="container-fluid login-fluidcontainer">
        <div className="login-container">
          <div className="row">
            <div className="col-md-4 center-col">
              <img
                className="img-fluid sideimg"
                src="assets/side-img.png"
                alt=""
              />
            </div>
            <div className="col-md-8 center-col text-center">
              <h2 className="pt-4 ps-3 ">Welcome back!</h2>
              <p className="pt-3 ps-3 pb-2 ">Signin to your account</p>
              <label htmlFor="email" className="pt-4">Email Id </label><br/>
              <input type="email" className="logininput-width"></input>
              <br />
              <label htmlFor="password" className="pt-2">
                Password
              </label><br/>
              <input type="password" className="logininput-width "></input>
              <br/>
             
              <button
                className="btn btn-primary mt-4 login-btn"
              >
                {" "}
                Login{" "}
              </button><br/>
            
              <button
                className="btn btn-primary mt-4 login-btn"
              >
                {" "}
                Sign in with <FcGoogle className="icon-google"/>{" "}
              </button>
              <p className="fw-bold pt-3 pb-3">Do not have an account? <Link to="/signup" className="text-primary text-decoration-none">Create Account</Link> </p> 
            </div>
            <div className="col-md-1"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginComp;
