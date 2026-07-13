import React from "react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="container">
      <h3 className="text-center mt-3 fs-5">Zerodha Products</h3>
      <h5 className="text-center text-muted mt-3 fs-6">Sleek, modern, and intuitive trading platforms</h5>
      <p className="text-center mt-4 " style={{fontSize:"15px"}}>
        Check out our <Link to="">investment offerings →</Link>
      </p>
    </div>
  );
}

export default Hero;
