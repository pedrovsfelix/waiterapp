import { ToastContainer } from "react-toastify";
// import 'react-toastify/ReactToastify.css';
import Home from "./ui/pages/Home";

export default function App() {
  return (
    <>
      <Home />
      <ToastContainer position="bottom-center" />
    </>
  );
}
