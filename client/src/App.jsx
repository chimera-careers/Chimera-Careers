import "./App.scss";

import Home from "./Components/Pages/Home"
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return(
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}/>
    </Routes>
        </BrowserRouter>
  )
}

export default App;
