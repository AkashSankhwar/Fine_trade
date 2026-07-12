import React from 'react';

function Education() {
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <img src="media/images/education.svg" alt="education" />
        </div>
        <div className="col">
          <h1 className="mb-3 fs-2" style={{ width: "70" }}>
            Free and open market education
          </h1>
          <p className="mb-3">
            Varsity, the largest online stock market education book in the world
            covering everything from the basics to advanced trading.
          </p>
          <a href="">
            varsity<i className="fa-solid fa-arrow-right-long"></i>
          </a>
          <p className="mb-3 mt-3">
            TradingQ&A, the most active trading and investment community in
            India for all your market related queries.
          </p>
          <a className="mb-3 mt-3" href="">
            TradingQ&A<i className="fa-solid fa-arrow-right-long"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Education;