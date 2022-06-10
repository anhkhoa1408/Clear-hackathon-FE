import React from "react";
import useAnimateScroll from "../../utils/scroll";

function Story() {
  useAnimateScroll("story-objective", 100);
  useAnimateScroll("last-image", 50, true);
  return (
    <div className="container mw-12 story-container d-flex flex-column">
      <div className="d-flex flex-row align-items-start">
        <div className="story-overview col-6">
          <h4>OVERVIEW</h4>
          <p>
            In the 10 years, Clear Men has successfully educated & recruited 15%
            Vietnamese Men, 25-45 to use Clear Men by:
          </p>
          <p>
            <span>Functional offer:</span> Overcoming all the scalp’s
            challenges.
          </p>
          <p>
            <span>Emotional offer:</span> Overcoming and beating no matter what
            challenges the world throws at him.
          </p>
          <p>
            We also engaged with Men by activating around their passion points,
            from the king of sports - Football to the emerging ESport - Gaming.
          </p>
        </div>

        <div className="story-image col-6">
          <img
            src="https://ufll2022-kova.vercel.app/_next/image?url=%2Fclear-men-bottle.png&w=1920&q=75"
            alt=""
          />
          <img
            src="https://ufll2022-kova.vercel.app/_next/image?url=%2Fclear-ronaldo.png&w=1920&q=75"
            alt=""
          />
          <img
            id="last-image"
            src="https://ufll2022-kova.vercel.app/_next/image?url=%2Fclear-unbeatable.png&w=1920&q=75"
            alt=""
            className="scroll-animate"
          />
        </div>
      </div>

      <div
        id="story-objective"
        className="story-objective d-flex flex-column w-100 justify-content-center scroll-animate"
      >
        <h4>OBJECTIVE</h4>
        <div className="d-flex flex-row">
          <div className="story-objective--card">
            <div className="story-objective--border">
              <div className="story-objective--content">
                <h4>EDUCATE</h4>
                <p>
                  Men that their scalp is biologically different from women's
                  and needs a shampoo catered especially for them in order to
                  effectively fight against dandruff.
                </p>
              </div>
            </div>
          </div>
          <div className="story-objective--card">
            <div className="story-objective--border">
              <div className="story-objective--content">
                <h4>RECRUIT</h4>
                <p>
                  50% of Vietnamese Gen Z, from 16+ Male, living in GT4 (Ha Noi,
                  Ho Chi Minh, Da Nang, Can Tho), currently using unisex or
                  female shampoo, to use Clear Men to end their dandruff
                  problem.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Story;
