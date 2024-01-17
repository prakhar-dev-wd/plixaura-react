import React, {useState, useEffect} from "react";
import "./App.css"
function ProductCost(){
    
    const [qty, setQty] = useState(0);

    useEffect(() => {
      const storedQty = localStorage.getItem('qty');
      if (storedQty !== null) {
        setQty(parseInt(storedQty, 10));
      }
    }, []); 
  
    const increase = () => {
      document.getElementById('item').classList.remove('null_display');
      localStorage.setItem('qty', qty + 1);
      setQty(qty + 1);
    };
  
    const decrease = () => {
      if (qty === 1) {
        localStorage.setItem('qty', 0);
        document.getElementById('item').classList.add('null_display');
      } else {
        localStorage.setItem('qty', qty - 1);
        setQty(qty - 1);
      }
    };    
return(
    <div className="prod-cart-details" id="item">
        <div className="cart-data">Product Added :</div>
        <div className="cart-cost">
            <img className="pro-cart-img" src="https://images.plixlife.com/products/762-c81e175599414d2e8af824fb9490ba1c.jpg?auto=format&sharp=20&ixlib=react-9.3.0&w=80&h=80&dpr=1&q=75"
            alt="plixlife product" />
            <div className="cart-prod-detail-">
            <p className="cart-cost-detail">Plix Aura Collection Luxury Perfume Gift Set (4 X 20 ml) | Unisex</p>
            <div className="prod-quantity">Pack of 4</div>
            </div>
            
        </div>
        <div className="cart-counter-parent">
        <div className="cart-counter">
            <button className="cart-quan-dec" onClick={decrease}>-</button>
            <span>{qty}</span>
            <button className="cart-quan-inc" onClick={increase}>+</button>
            </div>
            <div className="cart-last-detail">
                <button className="cart-prod-button">1% off</button>
                <span className="cart-prod-final-price">₹649</span>
                <span className="cart-prod-nodiscount">₹650</span>
            </div>
        </div>
        <div className="proceed-to-pay">
            <span className="final-amount">Total ₹{qty*649}</span>
            <button className="checkout">Proceed To Pay</button>
        </div>
    </div>  
)
}
export default ProductCost;