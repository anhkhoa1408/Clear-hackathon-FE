import React from "react";
import useAnimateScroll from "../../utils/scroll";

function Story() {
  useAnimateScroll("story-objective", 3, false, true);
  useAnimateScroll("last-image", 10, true);
  useAnimateScroll("target-bg", 20, true, true);
  useAnimateScroll("target-title", 30, true, true);
  useAnimateScroll("choose-one--img", 5, true, true);
  useAnimateScroll("choose-two--content", 15, false, true);
  useAnimateScroll("choose-two--img", 15, true, true);
  useAnimateScroll("context-container", 5, true, true);

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

      <div className="target-audience d-flex flex-column justify-content-center align-items-center w-100 min-vh-100">
        <h4
          id="target-title"
          className="align-self-center w-100 scroll-animate"
        >
          TARGET AUDIENCE
          <div id="target-bg" className="target-bg scroll-animate"></div>
        </h4>
      </div>

      <div className="story-choose w-100 min-vh-100">
        <div className="choose-one w-100">
          <div
            id="choose-one--img"
            className="choose-one--img col-6 scroll-animate"
          >
            <img
              src="https://ufll2022-kova.vercel.app/_next/image?url=%2Fgenz-1.png&w=1200&q=75"
              alt=""
            ></img>
            <img
              src="https://ufll2022-kova.vercel.app/_next/image?url=%2Fgenz-2.png&w=1200&q=75"
              alt=""
            ></img>
            <img
              src="https://ufll2022-kova.vercel.app/_next/image?url=%2Fgenz-3.png&w=1200&q=75"
              alt=""
            ></img>
          </div>
          <div className="choose-one--content col-6 d-flex flex-column justify-content-center">
            <h4 className="text-title__light text-left">GEN Z</h4>
            <p>Gen Z who have income greater than 2,4 million VNĐ/month</p>
            <p>Location: GT4 HCMC, Da Nang, Ha Noi, Can Tho</p>
            <p>Active, busy, want to optimize time, need the convenience.</p>
            <p>Familiar with technology, can determine their chooses.</p>
          </div>
        </div>
        <div className="choose-two w-100 d-flex flex-row">
          <div
            id="choose-two--content"
            className="choose-two--content col-6 scroll-animate"
          >
            <h4 className="text-title__light text-left">Why do we choose?</h4>
            <p>
              They have a relatively low income, so they will be sensitive to
              prices. Therefore, they will consider carefully before making a
              decision.
            </p>
            <p>
              In addition, the information channel they rely on is largely from
              social media. We can step up and take advantage of this
              opportunity.
            </p>
          </div>
          <div
            id="choose-two--img"
            className="choose-two--img d-flex flex-column col-6 scroll-animate align-items-center"
          >
            <img
              src="https://ufll2022-kova.vercel.app/_next/image?url=%2Fsocial-media-1.png&w=1920&q=75"
              alt=""
            />
            <img
              src="https://ufll2022-kova.vercel.app/_next/image?url=%2Fsocial-media-2.png&w=1920&q=75"
              alt=""
            />
          </div>
        </div>
      </div>

      <div id="context-container" className="context-container w-100 scroll-animate">
        <h4 className="context-container--header">THE CONTEXT</h4>
        <div className="d-flex flex-row justify-content-between mb-4">
          <div className="context-container--card">
            <div className="context-container--border">
              <div className="context-container--content">
                <h4>75%</h4>
                <p>men in Vietnam do not use men’s shampoo</p>
              </div>
            </div>
          </div>
          <div className="context-container--card">
            <div className="context-container--border">
              <div className="context-container--content">
                <h4>1/3</h4>
                <p>population in Vietnam</p>
              </div>
            </div>
          </div>
          <div className="context-container--card">
            <div className="context-container--border">
              <div className="context-container--content">
                <h4>65%</h4>
                <p>research the origin of their purchases</p>
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex flex-row justify-content-between">
          <div className="context-container--card">
            <div className="context-container--border">
              <div className="context-container--content">
                <h4>50%</h4>
                <p>men in Vietnam use men’s shampooo</p>
              </div>
            </div>
          </div>
          <div className="context-container--card">
            <div className="context-container--border">
              <div className="context-container--content">
                <h4>75%</h4>
                <p>ware wiling to pay more for a sustainable product</p>
              </div>
            </div>
          </div>
          <div className="context-container--card">
            <div className="context-container--border">
              <div className="context-container--content">
                <h4>2/3</h4>
                <p>research the origin of their purchases</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="static-container" className="static-container">
        
      </div>
    </div>
  );
}

export default Story;
