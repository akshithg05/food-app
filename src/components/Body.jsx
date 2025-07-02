import { RestaurantCard, withLabelRestaurantCard } from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { SWIGGY_API, PROXY_URL } from "../utils/constants";
import { Link } from "react-router";
import useOnlineStatus from "../hooks/useOnlineStatus";

const Body = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const onlineStatus = useOnlineStatus();

  const RestaurantCardLabel = withLabelRestaurantCard(RestaurantCard);

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
    <>
      {!onlineStatus ? (
        <div>
          <h1> Uh oh! Looks like you are offline</h1>
        </div>
      ) : (
        <div>
          <div className=" px-3 mx-18 pt-5">
            <input
              className="m-2 p-2  max-w-md border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-400 shadow-sm transition duration-200"
              type="Search"
              placeholder="Search..."
              onChange={(e) => {
                setSearchText(e.target.value);
              }}
              value={searchText}
            />
            <button
              className="m-2 px-4 py-2 bg-pink-500 text-white rounded hover:bg-pink-600 transition"
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
              className="m-2 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition"
              onClick={() => {
                // callback function which will be clicked on click
                setListOfRestaurants(
                  listOfRestaurants.filter((res) => res.info.avgRating > 4.5)
                );
              }}
            >
              Top rated restaurants (&gt; 4.5 stars)
            </button>
            <button
              className="m-2 px-4 py-2 bg-gray-300 text-black rounded hover:bg-gray-400 transition"
              onClick={() => setListOfRestaurants(allRestaurants)}
            >
              Clear filter
            </button>
          </div>
          {listOfRestaurants.length === 0 ? (
            <Shimmer />
          ) : (
            <div className="flex flex-wrap px-5 mx-15">
              {listOfRestaurants.map((res) => (
                <Link
                  className="restaurant-link"
                  key={res?.info?.id}
                  to={`/restaurants/${res?.info?.id}`}
                >
                  {res.info.avgRating > 4.5 ? (
                    <RestaurantCardLabel key={res?.info?.id} resData={res} />
                  ) : (
                    <RestaurantCard key={res?.info?.id} resData={res} />
                  )}
                </Link>
              ))}
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default Body;
