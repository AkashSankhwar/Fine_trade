import React from 'react';
import Navbar from './navbar';
function NotFound() {
    return (  
        <>
       <div className='container p-5 mb-5'>
            <div className="row text-center">
                <p className='mt-5'>  404  </p>
                <h1>Kiaan couldn’t find that page</h1>
                <p>We coouldn't find the page you were looking for.Visit <link to="/"></link></p>
            </div>
     
             
        </div>
           </> 
    );
}

export default NotFound;