import { useState } from "react";
import { login } from "./Store";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
//import axios from "axios";

function Login() {
  const navigate = useNavigate();
  const Dispatch = useDispatch();
  const [Code, setCode] = useState("");

  const onEnter = () => {
    // axios.get(`https://hitmyapi.netlify.app/`).then((data) => {
    //   console.log(Code,data.data);
    //   if (Code == data.data.CODE) {
    //     Dispatch(login({ code: Code }));
    //     navigate("/Home");
    //   } else {
    //     alert("NOT");
    //   }
    // });
    if (Code == 123) {
           Dispatch(login({ code: Code }));
           navigate("/Home");
         } else{
          alert();
         }
  };
  return (
    <>
      {/* <div classNameName="mt-5 py-5">
        <div classNameName="container-fluid d-grid mt-5 ">
          <div classNameName="row">
            <label classNameName="col-12 text-light py-5 h2">ENTER YOUR CODE</label>
            <div>
              <div classNameName="col-5"></div>
              <input
                classNameName="col-2 form-control px-5"
                type="password"
                value={Code}
                onChange={(e) => setCode(e.target.value)}
              ></input>
              <div classNameName="col-5"></div>
            </div>
          </div>
        </div>
        <button classNameName="btn btn-primary mt-5" onClick={onEnter}>
          SUBMIT
        </button>
      </div> */}



      {/* <!-- Section: Design Block --> */}
<section className="">
  {/* <!-- Jumbotron --> */}
  <div className="px-4 py-5 px-md-5 text-center text-lg-start" 
  //  style={{backgroundColor: "hsl(0, 0%, 96%)"}}
  >
    <div className="container">
      <div className="row gx-lg-5 align-items-center">
        <div className="col-lg-6 mb-5 mb-lg-0">
          <h1 className="my-5 display-3 fw-bold ls-tight">
            <b className="text-light">The best offer</b> <br />
            <span className="text-primary">for your business</span>
          </h1>
          <p style={{color: "hsl(217, 10%, 50.8%)"}}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Eveniet, itaque accusantium odio, soluta, corrupti aliquam
            quibusdam tempora at cupiditate quis eum maiores libero
            veritatis? Dicta facilis sint aliquid ipsum atque?
          </p>
        </div>

        <div className="col-lg-6 mb-5 mb-lg-0">
          <div className="card">
            <div className="card-body py-5 px-md-5">
              <form>
                {/* <!-- 2 column grid layout with text inputs for the first and last names --> */}
                <div className="row">
                  <div className="col-md-6 mb-4">
                    <div className="form-outline">
                      <input type="text" id="form3Example1" className="form-control" placeholder="Rakshith"/>
                      <label className="form-label" htmlFor="form3Example1">First name</label>
                    </div>
                  </div>
                  <div className="col-md-6 mb-4">
                    <div className="form-outline">
                      <input type="text" id="form3Example2" className="form-control" placeholder="Shetty"/>
                      <label className="form-label" htmlFor="form3Example2">Last name</label>
                    </div>
                  </div>
                </div>

                {/* <!-- Email input --> */}
               

                {/* <!-- Password input --> */}
                <div className="form-outline mb-4">
                  <input type="password" id="form3Example4" className="form-control" value={Code}
                onChange={(e) => setCode(e.target.value)}/>
                  <label className="form-label" htmlFor="form3Example4">Password</label>
                </div>
{/* 
                <!-- Checkbox --> */}
                <div className="form-check d-flex justify-content-center mb-4">
                  {/* <input className="form-check-input me-2" type="checkbox" value="" id="form2Example33" checked /> */}
                  <label className="form-check-label" htmlFor="form2Example33">
                   
                  </label>
                </div>

                {/* <!-- Submit button --> */}
                
                {/* <!-- Register buttons --> */}
                <div className="text-center justify-content-center">
                <button type="submit" className="btn btn-large btn-primary btn-block" onClick={onEnter}>
                  LOGIN
                </button>

                 

                  {/* <button type="button" className="btn btn-link btn-floating mx-1">
                    <i className="fab fa-twitter"></i>
                  </button>

                  <button type="button" className="btn btn-link btn-floating mx-1">
                    <i className="fab fa-github"></i>
                  </button> */}

                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* <!-- Jumbotron --> */}
</section>
{/* <!-- Section: Design Block --> */}



    </>
  );
}

export default Login;
