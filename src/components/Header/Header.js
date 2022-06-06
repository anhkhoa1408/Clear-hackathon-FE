import React from "react";

function Header() {


  return (
    <div className="header">
      <div className="header--banner">
        <img src="https://ufll2022-kova.vercel.app/logo.svg" alt="" />
        <img src="https://ufll2022-kova.vercel.app/clear-logo.svg" alt="" />
      </div>
      <div className="header--sidenav">
        <div className="header--navlink">
          <span>STORY</span>
        </div>
        <div className="header--navlink">
          <span>INSIGHT</span>
        </div>
        <div className="header--navlink">
          <span>BIG IDEA</span>
        </div>
        <div className="header--navlink">
          <span>DEPLOYMENT PLAN</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
