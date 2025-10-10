import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import React from "react";

interface AppProps {
    children: React.ReactNode;
}

export default function App({ children }: AppProps) {
  return (
    <>
      {children}
      <ToastContainer position="bottom-center" />
    </>
  );
}
