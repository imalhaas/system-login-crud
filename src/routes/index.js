import { Fragment } from "react";
import { BrowserRouter, Route, Routes, Navigate, } from "react-router-dom";
import Signin from "../pages/Home/Signin";
import Signup from "../pages/Home/Signup";
import useAuth from "../hooks/useAuth";
import Home from "../pages/Home";
import App from "../crud/src/App";

const Private = ({ Item }) => {
  const { signed } = useAuth();

  return signed > 0 ? <Item /> : <Signin />;
};

const RoutesApp = () => {
  return (
    <BrowserRouter>
      <Fragment>
        <Routes>
        <Route exact path="/home" element={<Private Item={Home} />} />
          <Route path="/crud" element={<App />} />
          <Route path="/" element={<Signin />} />
          <Route path="/" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Fragment>
    </BrowserRouter>
  );
};

export default RoutesApp;
