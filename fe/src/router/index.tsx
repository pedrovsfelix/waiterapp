import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../ui/pages/Login";
import Home from "../ui/pages/Home";

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Login" element={<Login/>} />
        <Route path='/' element={<Home/>} />
      </Routes>
    </BrowserRouter>
  )
}
