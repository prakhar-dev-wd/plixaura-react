import React from "react";
import Header from "./components/Header";
import Image from "./components/Image";
import Prod from "./ProductData";

function App() {
  return (
    <div>
      <Header text="PLIX"/>
      <div className="data">
        <Image />
        <Prod text="Plix Aura Collection Collection Luxury Perfume Gift Set (4 X 20 ml) | Unisex " />
      </div>
    </div>
  );
}

export default App;
