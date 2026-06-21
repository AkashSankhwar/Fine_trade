import React from 'react';

function Hero() {
    return ( 
        <div className='container p-5 mb-5'>
            <div className="row text-center">
                <img src="/media/images/homeHero.png" alt='Hero image 'className='mb-5'/>
                <h1 className='mt-5'>Invest in everything</h1>
                <p>Online plateform in stocks,derivatives,mutual funds,and more</p>
                <button className='p-2 bg-primary rounded-3 text-white fs-6' style={{width:"30%",margin:"0 auto"}}>Signup now</button>
            </div>

             
        </div>
     );
}

export default Hero;
