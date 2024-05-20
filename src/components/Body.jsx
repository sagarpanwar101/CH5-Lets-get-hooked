import React, { useEffect, useState } from "react";
import { restaurantList } from "../components/config";
import RestaurantCard from "../components/RestaurantCard";


const  filterData = (searchText, restaurant) => {
  return restaurant.filter(restaurant=> restaurant.data.name.toLowerCase().includes(searchText,toLowerCase()));
}


const Body = () => {
  const [listOfRestaurant, setListOfRestaurant] = useState(restaurantList);
  const [searchQuery, setSearchQuery] = useState("");


//----------------------------- dont remove these comments --------------------------------------------
  // console.log("restaurantlist::",restaurantList);

  // useEffect(()=> {
  //   console.log("restaurantList from config",restaurantList);
  //   setListOfRestaurant(restaurantList);
  // },[]);

  // useEffect(()=> {
  //   console.log("listofRestaurant::",listOfRestaurant);
  // },[listOfRestaurant]);


  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
    const filteredList = restaurantList.filter((restaurant) =>
      restaurant.data.name.toLowerCase().includes(event.target.value.toLowerCase())
    );
    setListOfRestaurant(filteredList);
  };

  return (
    <>
      <div className="search-container">
        <input type="text" placeholder="Search restaurants" value={searchQuery}  className="search-input" onChange={handleSearch} />
        <button className="searchBtn">
          Search
        </button>
      </div>
      <div className="filtercontainer">
        <button
          className="filter-btn"
          onClick={() => {
            // console.log("btn clicked");
            const FilteredList = listOfRestaurant.filter(
              (restaurant) => restaurant.data.avgRating > 4
            );
            // console.log("FilteredList", FilteredList);

            setListOfRestaurant(FilteredList);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="restaurant-list">
      {listOfRestaurant.length > 0 ? (
          listOfRestaurant.map((restaurant) => (
            <RestaurantCard data={restaurant.data} key={restaurant.data.id} />
          ))
        ) : (
          <p>No restaurants available</p>
        )}
      </div>
    </>
  );
};

export default Body;
