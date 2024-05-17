// import imgCdn 
import React from "react";
import {IMG_CDN} from "../components/config";


const RestaurantCard = (data) => {
  // console.log("data",data);
  // console.log("data 2::",data.data.cuisines.join(", "));
    return (
      <div className="card">
        <img src={ IMG_CDN + data.data.cloudinaryImageId } alt={data.data.name} />
        <span className="card-title">{data.data.name}</span>
        <span className="card-tags">{data.data.cuisines.join(", ")}</span>
        <span className="card-rating">{data.data.avgRating}</span>
        <h4>{data.data.lastMileTravelString} minutes</h4>
      </div>
    );
  };

export default RestaurantCard;