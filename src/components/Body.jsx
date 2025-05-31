import RestaurantCard from "./RestaurantCard";
import data from "../utils/mock-data";
import { useState } from "react";

const Body = () => {
  const [isTopRestaurantsSelected, setIsTopRestaurantsSelected] = useState(false);

  const filteredRestaurants = !isTopRestaurantsSelected
    ? data.restaurants
    : data.restaurants.filter((res) => res.info.avgRating > 4.5);

  return (
    <div className="body">
      <div>
        <button
          className="filter-btn"
          onClick={() => {
            // callback function which will be clicked on click
            console.log("Button clicked");
            setIsTopRestaurantsSelected(true);
          }}
        >
          Top rated restaurants (&gt; 4.5 stars)
        </button>
        <button onClick={() => setIsTopRestaurantsSelected(false)}>Clear filter</button>
      </div>
      <div className="res-container">
        {filteredRestaurants.map((res) => (
          <RestaurantCard key={res?.info?.id} resData={res} />
        ))}
      </div>
    </div>
  );
};

export default Body;
