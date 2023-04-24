import { useState } from "react";
import { login } from "./Store";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";

function Login() {
  const navigate = useNavigate();
  const Dispatch = useDispatch();
  const [Code, setCode] = useState("");

  const onEnter = () => {
    axios.get(`https://hitmyapi.netlify.app/`).then((data) => {
      console.log(Code,data.data);
      if (Code == data.data.CODE) {
        Dispatch(login({ code: Code }));
        navigate("/Home");
      } else {
        alert("NOT");
      }
    });
    
  };
  return (
    <>
      <div className="mt-5 py-5">
        <div className="container-fluid d-grid mt-5 ">
          <div className="row">
            <label className="col-12 text-light py-5 h2">ENTER YOUR CODE</label>
            <div>
              <div className="col-5"></div>
              <input
                className="col-2 form-control px-5"
                type="password"
                value={Code}
                onChange={(e) => setCode(e.target.value)}
              ></input>
              <div className="col-5"></div>
            </div>
          </div>
        </div>
        <button className="btn btn-primary mt-5" onClick={onEnter}>
          SUBMIT
        </button>
      </div>
    </>
  );
}

export default Login;
