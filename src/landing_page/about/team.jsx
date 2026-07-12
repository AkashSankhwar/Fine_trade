import React from "react";
import { Link } from "react-router-dom";
function Team() {
  return (
    <div className="container">
      <h5 style={{ textAlign: "center " }} className="text-muted">People</h5>
      <div className="row">
        <div className="col text-muted mb-5">
          <img
            src="/media/images/nithinKamath.jpg" 
            
            style={{
              width: "50%",
              borderRadius: "50%",
              marginLeft: "40%",
              marginTop: "10%",
            }}
          />
          <h6 style={{marginLeft:"50%"}}>Nithin Kamath</h6>
          <p  style={{marginLeft:"53%",fontSize:"12px"}}>Founder, CEO</p>
        </div>
        <div
          className="col text-muted mb-5"
          style={{ marginRight: "16%", marginTop: "5%", fontSize: "15px" }}
        >
          <p>
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>
          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>
          <p>Playing basketball is his zen.</p>
          <p>
            Connect on <Link>HomePage</Link> / <Link>TradingQnA</Link> /
            <Link>Twitter</Link>{" "}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
