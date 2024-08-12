import { Fragment } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Signin from "../pages/Home/Signin";
import Signup from "../pages/Home/Signup";
import useAuth from "../hooks/useAuth";
import App from '../crud/src/App';

const Private = ({ element }) => {
  const { signed } = useAuth();
  return signed ? element : <Navigate to="/crud" />;
};

const RoutesApp = () => {
  return (
    <BrowserRouter>
      <Fragment>
        <Routes>
          <Route path="/crud" element={<Private element={<App />} />} />
          <Route path="/" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Fragment>
    </BrowserRouter>
  );
};

export default RoutesApp;
