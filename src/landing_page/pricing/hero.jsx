import React from 'react';
function Hero() {
    return ( 
        <div className="container">
            <h1 className='text-center'>Charges</h1>
            <h3 className='text-center'>List of all charges and taxes</h3>
            <div className="row">
                <div className="col">
                    <img src='media\images\pricingMF.svg'/>
                    <h1>Free equity delivery</h1>
                    <p>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
                </div>
                <div className="col">
                    <img src='media\images\intradayTrades.svg'/>
                    <h1>Intraday and F&O trades</h1>
                    <p>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
                </div>
                <div className="col">
                    <img src='media\images\pricingMF.svg'/>
                    <h1>Free direct MF</h1>
                    <p>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
                </div>
            </div>
        </div>
     );
}

export default Hero;