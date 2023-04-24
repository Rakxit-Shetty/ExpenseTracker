//import React from 'react'
 import {logout} from "./Store";
 import { Navigate, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

function Home() {
    const Dispatch = useDispatch();
    const navigate = useNavigate();
    const Auth=useSelector((state)=>state.user.isAuth);
    const Code=useSelector((state)=>state.user.value.code);
    console.log(Auth);
    if(Auth===false){
        //Dispatch(logout());
        return <Navigate to="/" />;
    }
  return (
<div className="h1 text-light"> 
<div>
Loged in with code {Code}
    </div>
    <button className="btn btn-danger" onClick={()=>{Dispatch(logout()); navigate("/");} }>logout</button>
</div>
  )
}

export default Home