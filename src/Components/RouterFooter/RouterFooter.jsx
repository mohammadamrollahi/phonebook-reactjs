import React from "react";
import "./RouterFooter.scss";
function RouterFooter() {
  return (
    <div className="footerdiv">
      <div className="footerpart">
        <i class="fas fa-phone-square-alt"></i>
      </div>
      <div className="footerpart">
        <i class="far fa-address-book"></i>
      </div>
      <div className="footerpart">
         <i class="far fa-star"></i>
      </div>
    </div>
  );
}

export default RouterFooter;
