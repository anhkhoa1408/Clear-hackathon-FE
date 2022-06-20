import React from "react";
import useAnimateScroll from "../../utils/scroll";

function BigIdea() {
  useAnimateScroll("big-idea__grad", 2, true, true);
  useAnimateScroll("big-idea__idea", 2, true, true);
  useAnimateScroll("idea-introduce", 40, true, true);
  return (
    <div className="container big-idea mw-12 d-flex flex-column">
      <div
        id="big-idea__grad"
        className="big-idea__bg big-idea__grad min-vh-100 mt-6 scroll-animate"
      >
        <h4 className="text-title">BIG IDEA</h4>
      </div>
      <div
        id="big-idea__idea"
        className="big-idea__bg big-idea__idea min-vh-100 mt-6 scroll-animate"
      >
        <p id="idea-introduce" className="scroll-animate">
          There is a perception that successful people are messy, while
          melodious people don't have time to focus on work. However, Gen Z
          always wants to be a dynamic, ambitious but always elegant young
          person.
        </p>
      </div>
      {/* <div
        id="big-idea__idea"
        className="big-idea__bg big-idea__idea min-vh-100 mt-6 scroll-animate"
      >
        <p>
          There is a perception that successful people are messy, while
          melodious people don't have time to focus on work. However, Gen Z
          always wants to be a dynamic, ambitious but always elegant young
          person.
        </p>
      </div> */}
    </div>
  );
}

export default BigIdea;
