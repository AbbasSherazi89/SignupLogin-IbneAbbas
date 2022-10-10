import { React, useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
const LoginComp = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = [email, password];
    localStorage.setItem("Local Storage data", JSON.stringify(data));
    sessionStorage.setItem("Session Storage data", JSON.stringify(data));
  };

  return (
    <>
      <div className="container login-fluidcontainer">
        <div className="login-container">
          <div className="row login-row">
            <div className="col-md-4">
              <img
                className="img-fluid sideimg"
                src="assets/side-img.png"
                alt=""
              />
            </div>
            <div className="col-md-8 text-center">
              <h2 className="pt-4 ps-3 ">Welcome back!</h2>
              <p className="pt-3 ps-3 pb-2 ">Signin to your account</p>
              <form onSubmit={handleSubmit}>
                <label htmlFor="email" className="pt-4">
                  Email Id{" "}
                </label>
                <br />
                <input
                  type="email"
                  className="logininput-width"
                  value={email}
                  onChange={(e) => {
                    setemail(e.target.value);
                  }}
                />
                <br />
                <label htmlFor="password" className="pt-2">
                  Password
                </label>
                <br />
                <input
                  type="password"
                  className="logininput-width "
                  value={password}
                  onChange={(e) => {
                    setpassword(e.target.value);
                  }}
                />
                <br />

                <button
                  className="btn btn-primary mt-4 login-btn"
                  type="submit"
                >
                  {" "}
                  Login{" "}
                </button>
                <br />
                {/* {localStorage.getItem("Email") && (
                  <div>
                    Name: <p>{localStorage.getItem("Email")}</p>
                  </div>
                )}
                {localStorage.getItem("Password") && (
                  <div>
                    Password: <p>{localStorage.getItem("Password")}</p>
                  </div>
                )} */}
              </form>
              <button className="btn btn-primary mt-4 login-btn">
                {" "}
                Sign in with <FcGoogle className="icon-google" />{" "}
              </button>
              <p className="fw-bold pt-3 pb-3">
                Do not have an account?{" "}
                <Link
                  to="/signup"
                  className="text-primary text-decoration-none last-link"
                >
                  Create Account
                </Link>{" "}
              </p>
            </div>
            <div className="col-md-1"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginComp;
