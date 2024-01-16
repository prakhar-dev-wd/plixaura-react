import React from "react";
import "./Membership.css"

function MemberButton() {
    return(
        <div className="membership-button">
        <button type="submit" className="membership-benefits">View Benefits</button>
        <button type="submit" className="membership-join">Join Now</button>
      </div>
    )
}
export default MemberButton; 