import React from "react";
import "./RouterFooter.scss";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
function RouterFooter() {
  return (
    <div className="footerdiv">
      <Link to="/call" className="footerpart">
          <i class="fas fa-phone-square-alt"></i>
      </Link>
      <Link to="/phonbook" className="footerpart">
          
        <i class="far fa-address-book"></i>
      </Link>

      <Link to="/favorites" className="footerpart">
        <i class="far fa-star"></i>
      </Link>
    </div>
  );
}

export default RouterFooter;
