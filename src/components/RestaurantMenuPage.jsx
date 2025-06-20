import { useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import useRestaurantMenu from "../hooks/useRestaurantMenu";

export default function RestaurantMenuPage() {
  const [vegOnly, setVegOnly] = useState(false);

  const { resId } = useParams();

  const { isLoading, data } = useRestaurantMenu(resId);

  const { name, costForTwoMessage, cuisines, cloudinaryImageId } =
    data?.data?.cards[2]?.card?.card?.info || {};

  const recommended =
    data?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card
      ?.card?.itemCards;

  const classics =
    data?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[5]?.card
      ?.card?.itemCards;

  return (
    <div className="menu">
      {isLoading ? (
        <Shimmer />
      ) : (
        <div>
          <h1>{name}</h1>
          <h2>{cuisines?.join(" ")}</h2>
          <h3>{costForTwoMessage}</h3>
          <h2>Menu</h2>
          <label className="switch">
            <input
              type="checkbox"
              onChange={(e) => setVegOnly(e.target.checked)}
            />
            <span className="slider">🫑 Veg Only</span>
          </label>

          {recommended && <h3>Recommended</h3>}
          <ul>
            {vegOnly
              ? recommended
                  ?.filter((foodItem) => foodItem?.card?.info?.isVeg)
                  .map((foodItem) => {
                    return (
                      <li key={foodItem?.card?.info?.id}>
                        {foodItem?.card?.info?.name}
                        {" - ₹  "}
                        {parseInt(foodItem?.card?.info?.price) / 100 ||
                          parseInt(foodItem?.card?.info.defaultPrice) / 100}
                      </li>
                    );
                  })
              : recommended?.map((foodItem) => {
                  return (
                    <li key={foodItem?.card?.info?.id}>
                      {foodItem?.card?.info?.name}
                      {" - ₹ "}
                      {parseInt(foodItem?.card?.info.price) / 100 ||
                        parseInt(foodItem?.card?.info.defaultPrice) / 100}
                    </li>
                  );
                })}
          </ul>
          {classics && <h3>Classics</h3>}

          <ul>
            {vegOnly
              ? classics
                  ?.filter((foodItem) => foodItem?.card?.info?.isVeg)
                  .map((foodItem) => {
                    return (
                      <li key={foodItem?.card?.info?.id}>
                        {foodItem?.card?.info?.name}
                        {" - ₹ "}
                        {parseInt(foodItem?.card?.info.price) / 100 ||
                          parseInt(foodItem?.card?.info.defaultPrice) / 100}
                      </li>
                    );
                  })
              : classics?.map((foodItem) => {
                  return (
                    <li key={foodItem?.card?.info?.id}>
                      {foodItem?.card?.info?.name}
                      {" - ₹ "}
                      {parseInt(foodItem?.card?.info.price) / 100 ||
                        parseInt(foodItem?.card?.info.defaultPrice) / 100}
                    </li>
                  );
                })}
          </ul>
        </div>
      )}
    </div>
  );
}
