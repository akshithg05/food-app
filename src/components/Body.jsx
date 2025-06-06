import RestaurantCard from "./RestaurantCard";
import data from "../utils/mock-data";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.97530&lng=77.59100&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const jsonData = await data.json();

    // Optional chaining
    setListOfRestaurants(jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  }

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div>
        <button
          className="filter-btn"
          onClick={() => {
            // callback function which will be clicked on click
            setListOfRestaurants(listOfRestaurants.filter((res) => res.info.avgRating > 4.5));
          }}
        >
          Top rated restaurants (&gt; 4.5 stars)
        </button>
        <button onClick={() => setListOfRestaurants(data?.restaurants)}>Clear filter</button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((res) => (
          <RestaurantCard key={res?.info?.id} resData={res} />
        ))}
      </div>
    </div>
  );
};

export default Body;
