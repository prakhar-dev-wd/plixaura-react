import React from "react";
import "./Membership.css";
function Membership() {
  return (
    <div className="plix-club">
      <img
        className="membership-img"
        src="https://images.plixlife.com/hosted/WhatsApp_Image_2022-11-11_at_1.19.40_PM-4a81c1961f2e-52f524156a8e.jpeg?auto=format&sharp=20&ixlib=react-9.3.0&w=1446"
        alt="plix-club-membership"
      />
      <div>
        <span className="membership-detail">
          Become a Plix Club member & get instant 10% discount on all orders
        </span>
        <div className="club-duration">
          <span className="membership-duration">(6-months)</span>
        </div>
      </div>
      <div className="final-price">
        <div className="club-price-tag">
          <span className="cost-nodiscount">999</span>
          <span className="cost-discount">₹399</span>
        </div>
        <span className="discount-percent">61%</span>
      </div>
      <div className="buttons">
      </div>
    </div>
  );
}
export default Membership;
