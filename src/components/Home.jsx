//import React from 'react'
// import { logout } from "./Store";
import { Navigate, 
  // useNavigate 
} from "react-router-dom";
import { useSelector } from "react-redux";
// import { useDispatch } from "react-redux";
import AddExpense from "./AddExpense";
function Home() {
  // const Dispatch = useDispatch();
  // const navigate = useNavigate();
  const Auth = useSelector((state) => state.user.isAuth);
  //const Code = useSelector((state) => state.user.value.code);
  console.log(Auth);

  if (Auth === false) {
    return <Navigate to="/" />;
  }
  return (
    <>
      {/* <div classNameName="h1 text-light">
        <div>Loged in with code {Code}</div>
        <button
          classNameName="btn btn-lg btn-danger mx-5"
          onClick={() => {
            Dispatch(logout());
            navigate("/");
          }}
        >
          LOGOUT
        </button>{" "}
      </div> */}
      <nav className="sb-topnav navbar navbar-expand navbar-dark bg-dark">
            {/* <!-- Navbar Brand--> */}
            <a className="navbar-brand ps-3" href="index.html">Start Bootstrap</a>
            {/* <!-- Sidebar Toggle--> */}
            <button className="btn btn-link btn-sm order-1 order-lg-0 me-4 me-lg-0" id="sidebarToggle" href="#!"><i className="fas fa-bars"></i></button>
            {/* <!-- Navbar Search--> */}
            <form className="d-none d-md-inline-block form-inline ms-auto me-0 me-md-3 my-2 my-md-0">
                <div className="input-group">
                    <input className="form-control" type="text" placeholder="Search for..." aria-label="Search for..." aria-describedby="btnNavbarSearch" />
                    <button className="btn btn-primary" id="btnNavbarSearch" type="button"><i className="fas fa-search"></i></button>
                </div>
            </form>
            {/* <!-- Navbar--> */}
            <ul className="navbar-nav ms-auto ms-md-0 me-3 me-lg-4">
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"><i className="fas fa-user fa-fw"></i></a>
                    <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                        <li><a className="dropdown-item" href="#!">Settings</a></li>
                        <li><a className="dropdown-item" href="#!">Activity Log</a></li>
                        <li><hr className="dropdown-divider" /></li>
                        <li><a className="dropdown-item" href="#!">Logout</a></li>
                    </ul>
                </li>
            </ul>
        </nav>
      <AddExpense />

    </>
  );
}

export default Home;
