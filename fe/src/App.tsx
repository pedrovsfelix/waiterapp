import { ToastContainer } from "react-toastify";
import { Router } from "./router";

export default function App() {
  return (
    <>
      <Router />
      <ToastContainer position="bottom-center" />
    </>
  );
}
