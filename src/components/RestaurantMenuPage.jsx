import { useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import useRestaurantMenu from "../hooks/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

export default function RestaurantMenuPage() {
  const [vegOnly, setVegOnly] = useState(false);

  const { resId } = useParams();

  const { isLoading, data } = useRestaurantMenu(resId);

  const { name, costForTwoMessage, cuisines, cloudinaryImageId } =
    data?.data?.cards[2]?.card?.card?.info || {};

  const categories =
    data?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className="px-20 mx-25">
      {isLoading ? (
        <Shimmer />
      ) : (
        <div>
          <div>
            <h1 className="my-3 mx-40 text-4xl ">
              <strong>{name}</strong>
            </h1>
            <h2 className="mx-40 my-3   text-2xl">{cuisines?.join(" ")}</h2>
            <h3 className="mx-40 my-3 pb-2 text-2xl">{costForTwoMessage}</h3>
            <h2 className="mx-40 my-3 text-2xl pb-2">
              <strong>Menu</strong>
            </h2>
          </div>
          <label className="flex items-center space-x-4 mx-40 cursor-pointer">
            <div className="relative">
              <input
                type="checkbox"
                className="sr-only peer"
                onChange={(e) => setVegOnly(e.target.checked)}
              />
              <div className="w-11 h-6 bg-gray-300 peer-checked:bg-green-500 rounded-full transition-colors duration-300"></div>
              <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full shadow transition-transform duration-300 peer-checked:translate-x-5"></div>
            </div>
            <span className="text-lg">🫑 Veg Only</span>
          </label>
          <div className="mx-40 my-3">
            {categories?.map((category, index) => {
              return (
                <RestaurantCategory
                  key={index}
                  index={index}
                  vegOnly={vegOnly}
                  category={category}
                />
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
