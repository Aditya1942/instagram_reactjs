import React from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Stories from "./Story/Stories";
import { useMediaQuery } from "@material-ui/core";

const Main = () => {
  const matches = useMediaQuery("(max-width:600px)");

  return (
    <div>
      <Header />
      <Stories />
      <div className="Fotter">{matches && <Footer />}</div>
    </div>
  );
};

export default Main;
