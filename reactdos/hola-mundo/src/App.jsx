import React from "react";

import "./App.css"
import Navbar from "./componentes/Navbar";
import Main from "./componentes/Main";
import Section from "./componentes/Section";
import Aside from "./componentes/Aside";
import Footer from "./componentes/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Main />
      <Section />
      <Aside />
      <Footer />
    </div>
  );
}

export default App;

