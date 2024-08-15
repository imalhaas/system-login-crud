import React from "react";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import * as C from "./styles";
import Button from "../../components/Button ";

const Home = () => {
  const { signout } = useAuth();
  const navigate = useNavigate();

  return (
    <C.Container>
      <Button Text="HOME"></Button>
      <iframe
        src="https://produtos-five.vercel.app/"
        title="CRUD"
        width="100%"
        height="600px"
        style={{ border: "none" }}
      ></iframe>
      <Button Text="Sair" onClick={() => [signout(), navigate("/")]}>
        Sair
      </Button>
    </C.Container>
  );
};

export default Home;
