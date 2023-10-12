import "./App.scss";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Pages/Home"
import Signin from "./Components/Pages/Signin";


function App() {
  return(
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/signin" element={<Signin />}/>
    </Routes>
        </BrowserRouter>
  )
}

export default App;
