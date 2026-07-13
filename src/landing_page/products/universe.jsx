import React from "react";
import { Link } from "react-router-dom";

function Universe() {
  return (
    <div className="container py-5">
      <h1 className="fs-5 text-center text-muted">The Zerodha Universe</h1>
      <p className="text-center mb-5">
        Extend your trading and investment experience even further with our
        partner platforms.
      </p>

      <div className="row row-cols-1 row-cols-md-3 gx-5 gy-5 align-items-stretch">
        <div className="col text-center ">
          <a
            href="https://www.zerodhafundhouse.com"
            className="d-inline-flex flex-column align-items-center text-center text-decoration-none text-dark h-100"
          >
            <img
              src="media/images/zerodhaFundhouse.png"
              alt="Zerodha Fund House"
              className="img-fluid mb-4 "
              style={{ maxWidth: "160px" }}
            />
            <p className="text-muted mx-auto" style={{ maxWidth: "280px" }}>
              Our asset management venture that is creating simple and transparent
              index funds to help you save for your goals.
            </p>
          </a>
        </div>

        <div className="col text-center">
          <a
            href="https://www.sensibull.com"
            className="d-inline-flex flex-column align-items-center text-center text-decoration-none text-dark h-100"
          >
            <img
              src="media/images/sensibullLogo.svg"
              alt="Sensibull"
              className="img-fluid mb-4"
              style={{ maxWidth: "160px" }}
            />
            <p className="text-muted mx-auto" style={{ maxWidth: "280px" }}>
              Options trading platform that lets you create strategies, analyze
              positions, and examine data points like open interest, FII/DII,
              and more.
            </p>
          </a>
        </div>

        <div className="col text-center">
          <a
            href="https://www.goldenpi.com"
            className="d-inline-flex flex-column align-items-center text-center text-decoration-none text-dark h-100"
          >
            <div className="mb-4" style={{ width: "220px" }}>
              <h2 className="mb-2" style={{ letterSpacing: "0.35em" }}>
                TIJORI
              </h2>
              <div
                style={{
                  width: "60px",
                  height: "3px",
                  margin: "0 auto",
                  backgroundColor: "#f7b500",
                }}
              />
            </div>
            <p className="text-muted mx-auto" style={{ maxWidth: "280px" }}>
              Investment research platform that offers detailed insights on
              stocks, sectors, supply chains, and more.
            </p>
          </a>
        </div>

        <div className="col text-center">
          <a
            href="https://www.streak.com"
            className="d-inline-flex flex-column align-items-center text-center text-decoration-none text-dark h-100"
          >
            <img
              src="media/images/streakLogo.png"
              alt="Streak"
              className="img-fluid mb-4"
              style={{ maxWidth: "160px" }}
            />
            <p className="text-muted mx-auto" style={{ maxWidth: "280px" }}>
              Systematic trading platform that allows you to create and backtest
              strategies without coding.
            </p>
          </a>
        </div>

        <div className="col text-center">
          <a
            href="https://www.smallcase.com"
            className="d-inline-flex flex-column align-items-center text-center text-decoration-none text-dark h-100"
          >
            <img
              src="media/images/smallcaseLogo.png"
              alt="smallcase"
              className="img-fluid mb-4"
              style={{ maxWidth: "160px" }}
            />
            <p className="text-muted mx-auto" style={{ maxWidth: "280px" }}>
              Thematic investing platform that helps you invest in diversified
              baskets of stocks on ETFs.
            </p>
          </a>
        </div>

        <div className="col text-center">
          <a
            href="https://www.dittoinsurance.com"
            className="d-inline-flex flex-column align-items-center text-center text-decoration-none text-dark h-100"
          >
            <img
              src="media/images/dittoLogo.png"
              alt="ditto"
              className="img-fluid mb-4"
              style={{ maxWidth: "140px" }}
            />
            <p className="text-muted mx-auto" style={{ maxWidth: "280px" }}>
              Personalized advice on life and health insurance. No spam and no
              mis-selling.
            </p>
          </a>
        </div>
      </div>

      <div className="text-center mt-5">
        <Link to="/signup" className="btn btn-primary px-5 py-3">
          Sign up for free
        </Link>
      </div>
    </div>
  );
}

export default Universe;
