import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { SWIGGY_API, PROXY_URL } from "../utils/constants";
import { Link } from "react-router";

const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const data = await fetch(PROXY_URL + encodeURIComponent(SWIGGY_API));

    const jsonData = await data.json();

    // Optional chaining
    setListOfRestaurants(
      jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setAllRestaurants(
      jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    );
  }

  return (
    <div className="body">
      <div>
        <input
          type="Search"
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
          value={searchText}
        />
        <button
          className="filter-btn"
          onClick={() => {
            // console.log(listOfRestaurants[0].info.name);
            searchText.length !== 0
              ? setListOfRestaurants(
                  allRestaurants.filter((res) =>
                    res?.info?.name
                      ?.toLowerCase()
                      ?.includes(searchText?.toLowerCase())
                  )
                )
              : setListOfRestaurants(allRestaurants);
          }}
        >
          Search
        </button>

        <button
          className="filter-btn"
          onClick={() => {
            // callback function which will be clicked on click
            setListOfRestaurants(
              listOfRestaurants.filter((res) => res.info.avgRating > 4.5)
            );
          }}
        >
          Top rated restaurants (&gt; 4.5 stars)
        </button>
        <button onClick={() => setListOfRestaurants(allRestaurants)}>
          Clear filter
        </button>
      </div>
      {listOfRestaurants.length === 0 ? (
        <Shimmer />
      ) : (
        <div className="res-container">
          {listOfRestaurants.map((res) => (
            <Link
              className="restaurant-link"
              key={res?.info?.id}
              to={`/restaurants/${res?.info?.id}`}
            >
              <RestaurantCard key={res?.info?.id} resData={res} />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Body;
