import React from "react";
import useAnimateScroll from "../../utils/scroll";

function Insight() {
  useAnimateScroll("insight-title", 0, false, true);
  useAnimateScroll("insight__dirt-bg", 0, false, true);
  useAnimateScroll("insight-gen-z", 15, false, true);
  useAnimateScroll("insight-digital", 15, false, true);
  useAnimateScroll("insight-proactive", 15, true, true);
  return (
    <div id="insight" className="insight mt-8">
      <div
        id="insight__dirt-bg"
        className="insight__bg insight__dirt-bg min-vh-100 scroll-animate"
      >
        <h4 id="insight-title" className="text-title scroll-animate">
          INSIGHT
        </h4>
        <img src="https://ufll2022-kova.vercel.app/dirt.gif" alt="" />
      </div>
      <div
        id="insight__mountain-bg"
        className="insight__bg insight__mountain-bg min-vh-100 scroll-animate"
      >
        <p id="insight-gen-z" className="insight__introduce scroll-animate">
          As{" "}
          <span>
            a Gen-Zer who can earn income and make decisions by myself
          </span>
          , I want to{" "}
          <span>
            explore and evaluate new products through researches before
            purchasing.
          </span>{" "}
          I am often <span>influenced by micro influencers</span> instead of
          macro influencers because of their{" "}
          <span>familiarity and reliability</span>, which helps me{" "}
          <span>make lucid buying decisions.</span>
        </p>
        <img src="https://ufll2022-kova.vercel.app/feel-mountain.jpg" alt="" />
      </div>
      <div
        id="insight__mountain-bg"
        className="insight__bg insight__mountain-bg min-vh-100 scroll-animate"
      >
        <p id="insight-digital" className="insight__introduce scroll-animate">
          As <span>a digital native</span>, I want to <span>shop online</span>{" "}
          so I{" "}
          <span>can save moving time, evaluate the products beforehand</span>,
          and avoid being constrained by <span>physical distance</span>
        </p>
        <img src="https://ufll2022-kova.vercel.app/e-commerce.jpg" alt="" />
      </div>
      <div
        id="insight__mountain-bg"
        className="insight__bg insight__mountain-bg min-vh-100 scroll-animate"
      >
        <p id="insight-proactive" className="insight__introduce scroll-animate">
          As <span>a proactive Gen-Zer with tight schedules</span>, I want{" "}
          <span>convenience and practicability</span> from my products so I can
          <span>save time for my passions.</span>
        </p>
        <img
          src="https://ufll2022-kova.vercel.app/beautiful-portrait.jpg"
          alt=""
        />
      </div>
    </div>
  );
}

export default Insight;
