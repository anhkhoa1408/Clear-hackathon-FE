import React, { useEffect } from "react";

function Header() {
  const handleScroll = (id, e) => {
    let element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      let navItem = document.getElementsByClassName("header--navlink");
      Array.from(navItem).forEach((item) => {
        item.childNodes[0].classList.remove("active");
      });
      e.target.classList.add("active");
    }
  };

  useEffect(() => {
    function activeNavOnScroll() {
      let storyElement = document.getElementById("story");
      let insightElement = document.getElementById("insight");
      let ideaElement = document.getElementById("big-idea");
      let planElement = document.getElementById("deployment-plan");
      let navItem = document.getElementsByClassName("header--navlink");
      Array.from(navItem).forEach((item) => {
        item.childNodes[0].classList.remove("active");
      });
      let scrollOffset = window.scrollY + window.innerHeight;
      if (
        scrollOffset >= storyElement.offsetTop &&
        scrollOffset <= storyElement.offsetTop + storyElement.offsetHeight
      ) {
        document
          .getElementsByClassName("header--navlink")[0]
          .childNodes[0].classList.add("active");
      } else if (
        scrollOffset >= insightElement.offsetTop &&
        scrollOffset <= insightElement.offsetTop + insightElement.offsetHeight
      ) {
        document
          .getElementsByClassName("header--navlink")[1]
          .childNodes[0].classList.add("active");
      } else if (
        scrollOffset >= ideaElement.offsetTop &&
        scrollOffset <= ideaElement.offsetTop + ideaElement.offsetHeight
      ) {
        document
          .getElementsByClassName("header--navlink")[2]
          .childNodes[0].classList.add("active");
      } else if (
        scrollOffset >= planElement.offsetTop &&
        scrollOffset <= planElement.offsetTop + planElement.offsetHeight
      ) {
        document
          .getElementsByClassName("header--navlink")[3]
          .childNodes[0].classList.add("active");
      }
    }

    let scrollListener = window.addEventListener("scroll", activeNavOnScroll);

    return () => window.removeEventListener(scrollListener);
  }, []);

  return (
    <div className="header">
      <div className="header--banner">
        <img src="https://ufll2022-kova.vercel.app/logo.svg" alt="" />
        <img src="https://ufll2022-kova.vercel.app/clear-logo.svg" alt="" />
      </div>
      <div className="header--sidenav">
        <div
          onClick={(e) => handleScroll("story", e)}
          className="header--navlink"
        >
          <span className="active">STORY</span>
        </div>
        <div
          onClick={(e) => handleScroll("insight", e)}
          className="header--navlink"
        >
          <span>INSIGHT</span>
        </div>
        <div
          onClick={(e) => handleScroll("big-idea", e)}
          className="header--navlink"
        >
          <span>BIG IDEA</span>
        </div>
        <div
          onClick={(e) => handleScroll("deployment-plan", e)}
          className="header--navlink"
        >
          <span>DEPLOYMENT PLAN</span>
        </div>
      </div>
    </div>
  );
}

export default Header;
