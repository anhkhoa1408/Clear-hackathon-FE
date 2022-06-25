import React, { useEffect } from "react";

function Header() {
  const handleScroll = (id, e) => {
    let element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({behavior: "smooth"})
      let navItem = document.getElementsByClassName("header--navlink")
      Array.from(navItem).forEach(item => {
        console.log(item.childNodes[0].classList)
        item.childNodes[0].classList.remove("active")
      })
      e.target.classList.add("active")
    }

  }

  return (
    <div className="header">
      <div className="header--banner">
        <img src="https://ufll2022-kova.vercel.app/logo.svg" alt="" />
        <img src="https://ufll2022-kova.vercel.app/clear-logo.svg" alt="" />
      </div>
      <div className="header--sidenav">
        <div onClick={(e) => handleScroll("story", e)} className="header--navlink">
          <span className="active">STORY</span>
        </div>
        <div onClick={(e) => handleScroll("insight", e)} className="header--navlink">
          <span>INSIGHT</span>
        </div>
        <div onClick={(e) => handleScroll("big-idea", e)} className="header--navlink">
          <span>BIG IDEA</span>
        </div>
        <div onClick={(e) => handleScroll("deployment-plan", e)} className="header--navlink">
          <span>DEPLOYMENT PLAN</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
