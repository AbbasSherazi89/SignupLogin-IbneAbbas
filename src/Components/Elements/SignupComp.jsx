import {React, useState} from "react";
import { Link } from "react-router-dom";

const SignupComp = () => {
 
    const [fname, setfname] = useState('');
    const [lname, setlname] = useState('');
    const [phone, setphone] = useState('');
    const [email, setemail] = useState('');
    const [pass, setpass] = useState('');
    const [cpass, setcpass] = useState('');
  
    const handleSubmit=(e)=>{
            e.preventDefault();
            const data=[fname,lname,phone,email,pass,cpass];
            console.log(data);
            
    }

  return (
    <>
      <div className="container-fluid signup-fluidcontainer">
        <div className="signup-container">
            
          <div className="row">
            <div className="col-md-4 center-col">
              <img className="img-fluid sideimg" src="assets/side-img.png" alt="" />
            </div>
            <div className="col-md-7 center-col">
            <h2 className="pt-4 ps-3">Register</h2>
            <p className="pt-3 ps-3 pb-2">Let's get you all setup so you can verify your personal account and begin setting up your profile</p>
                <form onSubmit={handleSubmit}>
              <div className="container">

                <div className="row mt-3">
                  <div className="col-md-6 fw-bold">
                    <label htmlFor="fname" name="fname" value={fname} onChange={(e)=>{setfname(e.target.value)}}>First Name</label>
                    <br />
                    <input type="text" className="input-width"></input>
                  </div>
                  <div className="col-md-6 fw-bold">
                    <label htmlFor="lname" name="lname" value={lname} onChange={(e)=>{setlname(e.target.value)}}>Last Name</label>
                    <br />
                    <input type="text" className="input-width"></input>
                  </div>
                  
                </div>
                <div className="row mt-3">
                  <div className="col-md-6 fw-bold">
                    <label htmlFor="phone" name="number" value={phone} onChange={(e)=>{setphone(e.target.value)}}>Phone Number</label>
                    <br />
                    <input type="number" className="input-width"></input>
                  </div>
                  <div className="col-md-6 fw-bold">
                    <label htmlFor="email" name="mail" value={email} onChange={(e)=>{setemail(e.target.value)}}>Email</label>
                    <br />
                    <input type="email" className="input-width"></input>
                  </div>
                </div>
                <div className="row mt-3">
                  <div className="col-md-6 fw-bold">
                    <label htmlFor="password" name="pass" value={pass} onChange={(e)=>{setpass(e.target.value)}}>Password</label>
                    <br />
                    <input type="password" className="input-width"></input>
                  </div>
                  <div className="col-md-6 fw-bold">
                    <label htmlFor="confirm password" name="cpass" value={cpass} onChange={(e)=>{setcpass(e.target.value)}}>Confirm Password</label>
                    <br />
                    <input type="password" className="input-width"></input>
                  </div>
                </div>
              </div>
              <div className="pt-3 ps-2">
              <input type="checkbox" className="checkbox-width"></input>
                    <label className="ps-2" htmlFor="">I agree to all the <a className="text-decoration-none" href="/"> Terms, Privacy</a> and <a className="text-decoration-none"  href="/">Fees.</a></label>
              </div>

              <button className="btn btn-primary mt-3 ms-2" type="submit"> Register </button>
              </form>
                   <p className="fw-bold pt-3 pb-3">Already have an account? <Link to="/" className="text-primary text-decoration-none">Login</Link> </p> 
            </div>
            <div className="col-md-1"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignupComp;
