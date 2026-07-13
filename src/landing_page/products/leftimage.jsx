import React from "react";
function LeftImage({
  imageURL,
  productName,
  productDesription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container " style={{marginTop:"150px"}}>
      <div className="row">
        <div className="col-6">
          <img src={imageURL} style={{width:"80%",marginLeft:"25%"}} />
        </div>
        <div className="col-6 p-5 mt-5">
          <h1 style={{fontSize:"20px" ,marginLeft:"20%"}}>{productName}</h1>
          <p style={{fontSize:"15px" ,marginLeft:"20%",paddingRight:"10px"}}>{productDesription}</p>
          <div>
            <a href={tryDemo} style={{fontSize:"20px" ,marginLeft:"20%"}}>Try Demo</a>
            <a href={learnMore} style={{ marginLeft: "50px" }} style={{fontSize:"20px" ,marginLeft:"20%"}}>
              Learn More
            </a>
          </div>
          <div className="mt-3">
            <a href={googlePlay} style={{fontSize:"20px" ,marginLeft:"20%"}}>
              <img src="media/images/googlePlayBadge.svg" />
            </a>
            <a href={appStore} style={{fontSize:"20px" ,marginLeft:"20%"}}  >
              <img
                src="media/images/appstoreBadge.svg"
                style={{ marginLeft: "50px" }}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftImage;
