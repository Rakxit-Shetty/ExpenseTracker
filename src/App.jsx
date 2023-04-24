//import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {Provider} from "react-redux"
import Login from "./components/login";
import Home from "./components/Home";
import {store} from "./components/Store"

import "./App.css";

function App() {
  return (
    <>
    <Provider store={store}>
    <Router>
        <Routes>

          <Route path="/" element={<Login />} />
          <Route path="/Home" element={<Home />} />

          <Route />
        </Routes>
      </Router>
    </Provider>
    
    </>
  );
}

export default App;
