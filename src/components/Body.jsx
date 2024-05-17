import React, { useState } from "react";
import { restaurantList } from "../components/config"; // Import the restaurantList directly from the config file
import RestaurantCard from "../components/RestaurantCard";

const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState([
    {
      id: "73017",
      name: "Singh Soup",
      uuid: "27ff4155-fe46-418e-9862-ab98953bf953",
      city: "22",
      avgRating: "4.5",
      area: "Anand Vihar Colony",
      cloudinaryImageId: "bdcd233971b7c81bf77e1fa4471280eb",
      cuisines: ["American", "Snacks", "Biryani"],
      costForTwoString: "₹300 FOR TWO",
      deliveryTime: 31,
      slugs: {
        restaurant: "kfc-chukkuwala-chukkuwala",
        city: "dehradun",
      },
      address:
        "KFC Restaurant, Khasra No 1281/1291, Opp Dr Manish Jain hospital, Chakrata road, Dehradun-248001",
      locality: "Clock Tower",
    },
    {
      id: "73014",
      name: "Bikanerwala",
      uuid: "27ff4155-fe46-418e-9862-ab98953bf953",
      city: "22",
      area: "Anand Vihar Colony",
      avgRating: "3.0",
      cloudinaryImageId: "bdcd233971b7c81bf77e1fa4471280eb",
      cuisines: ["American", "Snacks", "Biryani"],
      costForTwoString: "₹300 FOR TWO",
      deliveryTime: 31,
      slugs: {
        restaurant: "kfc-chukkuwala-chukkuwala",
        city: "dehradun",
      },
      address:
        "KFC Restaurant, Khasra No 1281/1291, Opp Dr Manish Jain hospital, Chakrata road, Dehradun-248001",
      locality: "Clock Tower",
    },
    {
      id: "73013",
      name: "Kumar Sweets",
      uuid: "27ff4155-fe46-418e-9862-ab98953bf953",
      city: "22",
      area: "Anand Vihar Colony",
      cloudinaryImageId: "bdcd233971b7c81bf77e1fa4471280eb",
      cuisines: ["American", "Snacks", "Biryani"],
      costForTwoString: "₹300 FOR TWO",
      deliveryTime: 31,
      avgRating: "3.0",
      slugs: {
        restaurant: "kfc-chukkuwala-chukkuwala",
        city: "dehradun",
      },
      address:
        "KFC Restaurant, Khasra No 1281/1291, Opp Dr Manish Jain hospital, Chakrata road, Dehradun-248001",
      locality: "Clock Tower",
    },
    {
      id: "73012",
      name: "MacD",
      uuid: "27ff4155-fe46-418e-9862-ab98953bf953",
      city: "22",
      area: "Anand Vihar Colony",
      cloudinaryImageId: "bdcd233971b7c81bf77e1fa4471280eb",
      cuisines: ["American", "Snacks", "Biryani"],
      costForTwoString: "₹300 FOR TWO",
      deliveryTime: 31,
      avgRating: "4.6",
      slugs: {
        restaurant: "kfc-chukkuwala-chukkuwala",
        city: "dehradun",
      },
      address:
        "KFC Restaurant, Khasra No 1281/1291, Opp Dr Manish Jain hospital, Chakrata road, Dehradun-248001",
      locality: "Clock Tower",
    },
  ]);

  return (
    <>
      <div className="filtercontainer">
        <button
          className="filter-btn"
          onClick={() => {
            // console.log("btn clicked");
            const FilteredList = listOfRestaurant.filter(
              (restaurant) => restaurant.avgRating > 4
            );
            // console.log("FilteredList", FilteredList);
            setListOfRestaurant(FilteredList);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="restaurant-list">
        {listOfRestaurant.map((restaurant) => (
          <RestaurantCard data={restaurant} key={restaurant.id} />
        ))}
      </div>
    </>
  );
};

export default Body;
