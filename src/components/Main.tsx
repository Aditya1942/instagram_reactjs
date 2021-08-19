import React from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Stories from "./Story/Stories";
import { Container, useMediaQuery } from "@material-ui/core";
import "./main.scss";
const Main = () => {
  const matches = useMediaQuery("(max-width:600px)");

  return (
    <div>
      <Header />
      <div className="Body">
        <Container maxWidth="sm">
          <Stories />
        </Container>
      </div>
      <div className="Fotter">{matches && <Footer />}</div>
    </div>
  );
};

export default Main;
