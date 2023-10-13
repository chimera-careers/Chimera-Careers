import "./App.scss";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Pages/Home"
import Signin from "./Components/Pages/UserPages/Signin";
import Register from "./Components/Pages/UserPages/Register";


function App() {
  return(
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/signin" element={<Signin />}/>
      <Route path="/register" element={<Register />}/>
    </Routes>
        </BrowserRouter>
  )
}

export default App;
