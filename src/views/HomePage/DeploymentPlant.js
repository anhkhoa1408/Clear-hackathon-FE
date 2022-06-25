import React from "react";
import { AlignLeft, AlignRight, ArrowRight } from "react-feather";
import useAnimateScroll from "../../utils/scroll";

function DeploymentPlant() {
  useAnimateScroll("deployment-title", 30, true, true);
  useAnimateScroll("shorterm", 10, false, true);
  useAnimateScroll("longterm", 10, true, true);
  useAnimateScroll("measure-menu", 10, false, true);
  useAnimateScroll("measure", 10, true, true);
  return (
    <div
      id="deployment-plan"
      className="container mw-12 d-flex flex-column w-100 min-vh-100"
    >
      <div className="min-vh-100 d-flex align-items-center justify-content-center">
        <h4 id="deployment-title" className="text-title scroll-animate">
          DEPLOYMENT PLAN
        </h4>
      </div>
      <div id="shorterm" className="min-vh-100 scroll-animate">
        <div className="deployment__menu">
          <div className="deployment__menu d-flex flex-row">
            <AlignRight className="mt-2 mr-2" />
            <div>
              <p className="deployment__item deployment__item--active">
                SHORT TERM
              </p>
              <p className="deployment__item">LONG TERM</p>
              <p className="deployment__item">MEASUREMENT</p>
            </div>
          </div>
        </div>
        <div className="deployment__shorterm">
          <h4 className="deployment__menu-title">4 - 6 months</h4>
          <div className="d-flex flex-row justify-content-between">
            <div className="deployment__card">
              <div className="deployment__card-content">
                <p>1.</p>
                <p>Educate “Men use Shampoo for Men”</p>
                <ArrowRight
                  size={20}
                  color="white"
                  className="align-self-end"
                />
              </div>
            </div>
            <div className="deployment__card">
              <div className="deployment__card-content">
                <p>2.</p>
                <p>
                  Campaign “Clear Men's makeover” - “Lột xác cùng Clear Men”
                </p>
                <ArrowRight
                  size={20}
                  color="white"
                  className="align-self-end"
                />
              </div>
            </div>
            <div className="deployment__card">
              <div className="deployment__card-content">
                <p>3.</p>
                <p>Spreading</p>
                <ArrowRight
                  size={20}
                  color="white"
                  className="align-self-end"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="longterm" className="min-vh-100 scroll-animate">
        <div className="deployment__menu">
          <div className="deployment__menu d-flex flex-row">
            <AlignRight className="mt-2 mr-2 align-self-center" />
            <div>
              <p className="deployment__item">SHORT TERM</p>
              <p className="deployment__item  deployment__item--active">
                LONG TERM
              </p>
              <p className="deployment__item">MEASUREMENT</p>
            </div>
          </div>
        </div>
        <div className="deployment__shorterm">
          <h4 className="deployment__menu-title">Greater than 6 months</h4>
          <div className="d-flex flex-row justify-content-between">
            <div className="deployment__card">
              <div className="deployment__card-content">
                <p>1.</p>
                <p>
                  Use refill packaging with different compliment - motivation
                  quotes
                </p>
                <ArrowRight
                  size={20}
                  color="white"
                  className="align-self-end"
                />
              </div>
            </div>
            <div className="deployment__card">
              <div className="deployment__card-content">
                <p>2.</p>
                <p>Recalling empty refill bags</p>
                <ArrowRight
                  size={20}
                  color="white"
                  className="align-self-end"
                />
              </div>
            </div>
            <div className="deployment__card">
              <div className="deployment__card-content">
                <p>3.</p>
                <p>Make it easy and convenient to shop online</p>
                <ArrowRight
                  size={20}
                  color="white"
                  className="align-self-end"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="min-vh-100 d-flex flex-row">
        <div
          id="measure-menu"
          className=" position-relative deployment__menu col-4 scroll-animate t--100"
        >
          <div className="deployment__menu d-flex flex-row">
            <AlignRight className="mb-3 mr-2 align-self-end" />
            <div>
              <p className="deployment__item">SHORT TERM</p>
              <p className="deployment__item">LONG TERM</p>
              <p className="deployment__item   deployment__item--active">
                MEASUREMENT
              </p>
            </div>
          </div>
        </div>
        <div id="measure" className="deployment__shorterm col-8 scroll-animate">
          <div className="mb-4 deployment__measure">
            <h4>MEASUREMENT</h4>
            <p>We set KPI for our campaign as below</p>
          </div>
          <div className="mb-4 deployment__measure">
            <h4>Awareness:</h4>
            <p>
              Minimum 100 people register to participate in the Campaign
              “Makeover with Clear Men” (5 weeks).
            </p>
            <p>
              Minimum reach 500.000 samples in GT4 in the first 2 months and
              must be get surveys of at least 67% to from the correct target gen
              Z customer.
            </p>
          </div>
          <div className="mb-4 deployment__measure">
            <h4>Penetration:</h4>
            <p>Market share is increasing at minimum 10% (first 6 months)</p>
            <p>
              For PR & TVC, it will reach to at least 12M viewers. including 92%
              from Gen Z as report from Youtube.
            </p>
            <p>→ It is estimated that will reach about 53% of gen Z in GT4.</p>
          </div>
          <div className="mb-4 deployment__measure">
            <h4>Retention:</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DeploymentPlant;
