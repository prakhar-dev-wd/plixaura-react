import React from "react";
import "./components/App.css"
import Tags from "./components/Tags";
import Cart from "./components/AddToCart";
import Cost from "./components/Cost";
function Prod() {
    return (
        <div>
            <p className="prod-data">Plix Aura Collection Collection Luxury Perfume Gift Set (4 X 20 ml) | Unisex </p>
            <div className="prod-tags">
            <Tags text="Long Lasting ⏳" color="rgb(184, 247, 181)"/>
            <Tags text ="IFRA Compliant ✅" color="rgb(252, 247, 155)"/>
            <Tags text ="Stain Free 💯" color="rgb(222, 194, 252"/>
            <Tags text ="Not animal tested 🐰" color="rgb(255, 216, 251)"/>
            </div>
            <Cost text="₹ 649"/>
            <Cart/>
        </div>
    )
}
export default Prod;