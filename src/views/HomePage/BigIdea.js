import React from "react";
import useLinearScroll from "../../utils/linearScroll";
import useAnimateScroll from "../../utils/scroll";

function BigIdea() {
  useAnimateScroll("big-idea__grad", 2, true, true);
  useAnimateScroll("big-idea__idea", 2, true, true);
  useAnimateScroll("idea-introduce", 40, true, true);
  useAnimateScroll("big-idea__bg-two", 10, true, true);
  useAnimateScroll("big-idea__des-two", 10, false, true);


  return (
    <div id="big-idea" className="container big-idea mw-12 d-flex flex-column">
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
      <div
        id="big-idea__idea-two"
        className="big-idea__bg min-vh-100 big-idea__idea-two min-vh-100 mt-6 position-relative"
      >
        <div
          id="big-idea__des-two"
          className="d-flex flex-column align-items-center justify-content-center scroll-animate"
        >
          <p className="text-description">
            To help young people always look elegant but still have time to do
            what they love, we deliver this idea:
          </p>
          <h4 className="text-desctiption">
            “Keeping up with the hectic life or embracing yourself ? Why not
            both with Clear Men ?”
          </h4>
        </div>
        <img
          id="big-idea__bg-two"
          src="https://ufll2022-kova.vercel.app/creative.svg"
          alt=""
          className="position-absolute scroll-animate"
        />
      </div>
      <div className="big-idea__guide w-100 d-flex flex-row align-items-start">
        <div className="col-6 pr-6">
          <p className="text-description">
            We will promote the convenience and fastness of Clear Men 3 in 1
            through a TVC:
          </p>
          <p className="text-description">
            The central film describes life of gen Z:
            <span> a student at university</span>
            and
            <span> a hard-working fresher</span>
            at a big MNC. They often have to
            <span> stay up at night</span>
            to work and
            <span> often get up late</span>
            every morning.
            <br />
            Therefore, they
            <span> do not have much time to thoroughly care themselves</span>
            with many steps, leading to
            <span> greasy hair and dandruff</span>. So, they lack confidence when
            meeting friends, colleagues and present in front of a crowd.
            <span> Their ability is not shown and appreciated</span>, they can
            not win scholarships and be promoted in work.
          </p>
          <p className="text-description">
            Since knowing Clear Men 3 in 1, instead of using many steps, they
            <span> only need 2 bumps of Clear Men 3 in 1</span>
            to care for both hair and body. It only takes them
            <span> 7 minutes to shower</span>
            and be on time to go to school and work but still ensure refreshing
            and elegant look.
          </p>
          <p className="text-description">
            Since using Clear Men 3 in 1, they have been more confident and have
            been able to do many things they love get what they want.
          </p>
          <p className="text-description">
            Finally, will show the saying
            <span>
               “Keeping up with the hectic life or embracing yourself? Why not
              both with Clear Men?”
            </span>
          </p>
        </div>
        <div className="col-6 position-sticky" style={{top: '20%'}}>
            <img
              src="https://ufll2022-kova.vercel.app/_next/image?url=%2Ftvc.png&w=1200&q=75"
              alt=""
              className="w-100"
            />
        </div>
      </div>
    </div>
  );
}

export default BigIdea;
