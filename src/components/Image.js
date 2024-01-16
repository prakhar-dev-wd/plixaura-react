import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import "./App.css";

function Image() {
  return (
    <div style={{margin:"10px auto"}}>
    <Carousel  width={384}  >
      <div>
        <img  src="https://images.plixlife.com/products/762-578905dafdc64962ab568c47ff381ec0.jpg?auto=format&fit=max&w=768"
         alt="Product"
          />
        
      </div>
      <div>
        <img src="https://images.plixlife.com/products/762-c81e175599414d2e8af824fb9490ba1c.jpg?auto=format&fit=max&w=768" 
         alt="Product"
        />
        
      </div>
      <div>
        <img src="https://images.plixlife.com/products/762-e92e2b9dd7df4968803cee97a2d1175b.jpg?auto=format&fit=max&w=768" 
         alt="Product"
        />
      </div>
      <div>
        <img src="https://images.plixlife.com/products/762-f8577c12cb5944d3b68762d162c96633.jpg?auto=format&fit=max&w=768" 
         alt="Product"
        />
      </div>
    </Carousel>
    </div>
  );
}
export default Image;
