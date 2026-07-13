import React from 'react';

function RightImage({ imageURL, productName, productDesription, learnMore }) {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-6 p-5 mt-5">
          <h1 style={{fontSize:"20px" ,marginLeft:"50%"}}>{productName}</h1>
          <p style={{fontSize:"14px" ,marginLeft:"50%",paddingRight:"10px"}}>{productDesription}</p>
          <div>
            <a href={learnMore} style={{fontSize:"20px" ,marginLeft:"50%",fontSize:"15px"}} >Learn More→</a>
          </div>
        </div>
        <div className="col-6">
          <img src={imageURL}  style={{width:"80%",marginRight:"25%"}}  />
        </div>
      </div>
    </div>
  );
}
export default RightImage;