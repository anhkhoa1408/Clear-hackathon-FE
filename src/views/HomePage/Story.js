import React, { useEffect } from "react";
import Chart from "react-apexcharts";
import useAnimateScroll from "../../utils/scroll";

function Story() {
  const chartOneOps = {
    chart: {
      id: "basic-bar",
      width: "100%",
      toolbar: {
        show: false,
      },
    },
    xaxis: {
      categories: [
        "Dandruff",
        "Itchy",
        "Dry",
        "Hair loss",
        "Oily",
        "Frizzy",
        "Broken hair",
        "Tangled",
        "Split end",
        "No problem",
      ],
      axisBorder: {
        show: false,
      },
      labels: {
        style: {
          colors: "#919eab",
          fontSize: "12px",
          fontWeight: 400,
        },
      },
      title: {
        text: "percentage (%)",
        style: {
          fontWeight: 900,
          color: "#919eab",
          fontSize: "13px",
        },
      },
    },
    yaxis: {
      labels: {
        style: {
          colors: "#919eab",
          fontSize: "12px",
          fontWeight: 400,
        },
      },
    },
    grid: {
      strokeDashArray: 3,
      borderColor: "#212B36",
      padding: {
        top: 30,
        left: 20,
      },
    },
    plotOptions: {
      bar: {
        borderRadius: 4,
        horizontal: true,
        barHeight: "24px",
      },
    },
    legend: {
      show: false,
    },
    dataLabels: {
      enabled: false,
    },
    tooltip: {
      custom: function ({ series, seriesIndex, dataPointIndex, w }) {
        var data = series[seriesIndex][dataPointIndex];

        return `<div>
        #series-1 <span class="chart__tooltip-value">
          ${data}%
        </span>
        </div>`;
      },
      x: {
        show: false,
      },
      marker: {
        show: false,
      },
    },
  };
  const chartTwoOps = {
    chart: {
      id: "basic-bar",
      width: "100%",
      toolbar: {
        show: false,
      },
    },
    xaxis: {
      categories: [
        "Play games",
        "Listening to music",
        "Social media",
        "Watching video/TV",
        "Internet surfing",
        "Chatting with friends",
        "Reading books",
        "Sleeping",
        "Talking friends on the phone",
        "Studying",
        "Working",
        "Cooking",
        "Fitness/Yoga",
      ],
      axisBorder: {
        show: false,
      },
      labels: {
        style: {
          colors: "#919eab",
          fontSize: "12px",
          fontWeight: 400,
        },
      },
    },
    yaxis: {
      labels: {
        style: {
          colors: "#919eab",
          fontSize: "12px",
          fontWeight: 400,
        },
      },
      title: {
        text: "percentage (%)",
        style: {
          fontWeight: 900,
          color: "#919eab",
          fontSize: "13px",
        },
      },
    },
    grid: {
      strokeDashArray: 3,
      borderColor: "#212B36",
      padding: {
        top: 30,
        left: 20,
      },
    },
    plotOptions: {
      bar: {
        borderRadius: 4,
        columnWidth: "26px",
      },
    },
    legend: {
      show: false,
    },
    dataLabels: {
      enabled: false,
    },
    tooltip: {
      custom: function ({ series, seriesIndex, dataPointIndex, w }) {
        var data = series[seriesIndex][dataPointIndex];
        return `<div>
        #series-1 <span class="chart__tooltip-value">
          ${data}%
        </span>
        </div>`;
      },
      x: {
        show: false,
      },
      marker: {
        show: false,
      },
    },
  };
  const chartThreeOps = {
    chart: {
      id: "basic-bar",
      width: "100%",
      toolbar: {
        show: false,
      },
    },
    xaxis: {
      categories: ["In use", "In use the most", "Favorite"],
      axisBorder: {
        show: false,
      },
      labels: {
        style: {
          colors: "#919eab",
          fontSize: "12px",
          fontWeight: 400,
        },
      },
    },
    yaxis: {
      labels: {
        style: {
          colors: "#919eab",
          fontSize: "12px",
          fontWeight: 400,
        },
      },
      title: {
        text: "percentage (%)",
        style: {
          fontWeight: 900,
          color: "#919eab",
          fontSize: "13px",
        },
      },
    },
    grid: {
      strokeDashArray: 3,
      borderColor: "#212B36",
      padding: {
        top: 30,
        left: 20,
      },
    },
    plotOptions: {
      bar: {
        borderRadius: 4,
        columnWidth: "26px",
      },
    },
    legend: {
      show: false,
    },
    dataLabels: {
      enabled: false,
    },
    tooltip: {
      custom: function ({ series, seriesIndex, dataPointIndex, w }) {
        let data = series[seriesIndex][dataPointIndex];
        let year = seriesIndex ? "2022" : "2021";
        return `<div> 
        <span class="fs-14">${year}: </span>
        <span class="chart__tooltip-value">
        ${data}%
        </span>
        </div>`;
      },
      x: {
        show: false,
      },
      y: {
        formatter: undefined,
        title: {
          formatter: (seriesName) => {
            // console.log(seriesName)
            return seriesName + "aaaaa";
          },
        },
      },
      marker: {
        show: false,
      },
    },
    colors: ["#338fff", "#ffe700"],
  };
  const chartOneSeries = [
    {
      name: "series-1",
      data: [28, 15, 15, 14, 9, 7, 4, 4, 3, 35],
    },
  ];
  const chartTwoSeries = [
    {
      name: "series-1",
      data: [66, 54, 54, 51, 50, 34, 33, 32, 31, 30, 25, 22, 29],
    },
  ];
  const chartThreeSeries = [
    { name: "2021", data: [49, 2, 5] },
    { name: "2022", data: [62, 7, 14] },
  ];

  useAnimateScroll("story-objective", 3, false, true);
  useAnimateScroll("last-image", 10, true);
  useAnimateScroll("target-bg", 20, true, true);
  useAnimateScroll("target-title", 30, true, true);
  useAnimateScroll("choose-one__img", 5, true, true);
  useAnimateScroll("choose-two__content", 15, false, true);
  useAnimateScroll("choose-two__img", 15, true, true);
  useAnimateScroll("context-container", 5, true, true);

  const handleNext = () => {
    let sliderItemsList = document.getElementsByClassName(
      "static-container__slider-item",
    );
    Array.from(sliderItemsList).forEach((item, index) => {
      let leftOffset = item.style.left
        ? item.style.left.slice(0, item.style.left.length - 2)
        : 0;
      if (
        -(Array.from(sliderItemsList).length - 1) * item.offsetWidth >
        Number.parseInt(leftOffset) - item.offsetWidth
      ) {
        item.style.left = `0px`;
      } else {
        item.style.left = `${leftOffset - item.offsetWidth}px`;
      }
    });
  };

  const handlePrevious = () => {
    let sliderItemsList = document.getElementsByClassName(
      "static-container__slider-item",
    );
    Array.from(sliderItemsList).forEach((item, index) => {
      let leftOffset = item.style.left
        ? item.style.left.slice(0, item.style.left.length - 2)
        : 0;
      console.log(leftOffset);
      if (Number.parseInt(leftOffset) + item.offsetWidth > 0) {
        item.style.left = `${-(Array.from(sliderItemsList).length - 1) * item.offsetWidth}px`
      } else {
        item.style.left = `${Number.parseInt(leftOffset) + item.offsetWidth}px`;
      }
    });
  };

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
          <div className="story-objective__card">
            <div className="story-objective__border">
              <div className="story-objective__content">
                <h4>EDUCATE</h4>
                <p>
                  Men that their scalp is biologically different from women's
                  and needs a shampoo catered especially for them in order to
                  effectively fight against dandruff.
                </p>
              </div>
            </div>
          </div>
          <div className="story-objective__card">
            <div className="story-objective__border">
              <div className="story-objective__content">
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
            id="choose-one__img"
            className="choose-one__img col-6 scroll-animate"
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
          <div className="choose-one__content col-6 d-flex flex-column justify-content-center">
            <h4 className="text-title__light text-left">GEN Z</h4>
            <p>Gen Z who have income greater than 2,4 million VNĐ/month</p>
            <p>Location: GT4 HCMC, Da Nang, Ha Noi, Can Tho</p>
            <p>Active, busy, want to optimize time, need the convenience.</p>
            <p>Familiar with technology, can determine their chooses.</p>
          </div>
        </div>
        <div className="choose-two w-100 d-flex flex-row">
          <div
            id="choose-two__content"
            className="choose-two__content col-6 scroll-animate"
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
            id="choose-two__img"
            className="choose-two__img d-flex flex-column col-6 scroll-animate align-items-center"
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

      <div
        id="context-container"
        className="context-container w-100 scroll-animate"
      >
        <h4 className="context-container__header">THE CONTEXT</h4>
        <div className="d-flex flex-row justify-content-between mb-4">
          <div className="context-container__card">
            <div className="context-container__border">
              <div className="context-container__content">
                <h4>75%</h4>
                <p>men in Vietnam do not use men’s shampoo</p>
              </div>
            </div>
          </div>
          <div className="context-container__card">
            <div className="context-container__border">
              <div className="context-container__content">
                <h4>1/3</h4>
                <p>population in Vietnam</p>
              </div>
            </div>
          </div>
          <div className="context-container__card">
            <div className="context-container__border">
              <div className="context-container__content">
                <h4>65%</h4>
                <p>research the origin of their purchases</p>
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex flex-row justify-content-between">
          <div className="context-container__card">
            <div className="context-container__border">
              <div className="context-container__content">
                <h4>50%</h4>
                <p>men in Vietnam use men’s shampooo</p>
              </div>
            </div>
          </div>
          <div className="context-container__card">
            <div className="context-container__border">
              <div className="context-container__content">
                <h4>75%</h4>
                <p>ware wiling to pay more for a sustainable product</p>
              </div>
            </div>
          </div>
          <div className="context-container__card">
            <div className="context-container__border">
              <div className="context-container__content">
                <h4>2/3</h4>
                <p>research the origin of their purchases</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="static-container" className="static-container w-100">
        <h4 className="static-container__header">OVERALL STATISTICS</h4>
        <div className="static-container__chart-slider d-flex flex-row">
          <div
            id="chart-one"
            className="static-container__slider-item active d-flex flex-row"
          >
            <div className="static-container__chart col-7 pr-4">
              <Chart
                options={chartOneOps}
                series={chartOneSeries}
                type="bar"
                height={364}
              />
            </div>
            <div className="static-container__chart-content col-5 pl-4">
              <h4>Men Hair Problem</h4>
              <p>
                Main hair problem of men is dandruff <br /> with 28%.
              </p>
            </div>
          </div>
          <div
            id="chart-two"
            className="static-container__slider-item d-flex flex-row"
          >
            <div className="static-container__chart col-7 pr-4">
              <Chart
                options={chartTwoOps}
                series={chartTwoSeries}
                type="bar"
                height={364}
              />
            </div>
            <div className="static-container__chart-content col-5 pl-4">
              <h4>
                How men spend on <br /> their free time
              </h4>
              <p>
                Social media in the top free time activities <br /> of men with
                54%.
              </p>
            </div>
          </div>
          <div
            id="chart-three"
            className="static-container__slider-item d-flex flex-row"
          >
            <div className="static-container__chart col-7 pr-4">
              <Chart
                options={chartThreeOps}
                series={chartThreeSeries}
                type="bar"
                height={364}
              />
            </div>
            <div className="static-container__chart-content col-5 pl-4">
              <h4>
                Social media trend 2021 <br /> vs 2022
              </h4>
              <p>
                Tiktok is becoming the trending social media in 2022 (increase
                immediately from 5% to 14%).
              </p>
            </div>
          </div>
        </div>
        <div className="static-container__slider-btn d-flex flex-row">
          <button onClick={handlePrevious}>{"<"}</button>
          <button onClick={handleNext}>{">"}</button>
        </div>
      </div>
    </div>
  );
}

export default Story;
