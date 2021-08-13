import React from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { useMediaQuery } from "@material-ui/core";

function App() {
  const matches = useMediaQuery("(max-width:600px)");

  return (
    <div className="App">
      <Header />

      <div className="Fotter">{matches && <Footer />}</div>
    </div>
  );
}

export default App;
