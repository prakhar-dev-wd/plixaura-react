import React from "react";
import Header from "./components/Header";
import Image from "./components/Image";
import Prod from "./ProductData";

function App() {
  return (
    <div>
      <Header />
      <div className="data">
        <Image />
        <Prod />
      </div>
    </div>
  );
}

export default App;
