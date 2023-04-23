
import { useState } from "react";

function Login() {
    const [Code,setCode]=useState("");

//const [show,setShow]=useState(false);

  return (
    <>
   
        <div className="mt-5 py-5">
        <div className="container-fluid d-grid mt-5 ">
    
      
          <div className="row">
    
          <label className="col-12 text-light py-5 h2">ENTER YOUR CODE</label>
          <div>
              <div className="col-4"></div>
          <input className="col-4 form-control px-5" type="password" value={Code} onChange={(e)=>setCode(e.target.value)}></input>
          <div className="col-4"></div>
          </div>
          
          </div>
          
          
        </div>
      </div>
        
   </>
  )
}

export default Login