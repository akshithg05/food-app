import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

export default function RestaurantCategory({ category, vegOnly }) {
  const [isOpen, setIsOpen] = useState(false);

  const allItems = category?.card?.card?.itemCards || [];
  const filteredItems = vegOnly
    ? allItems.filter((foodItem) => foodItem?.card?.info?.isVeg)
    : allItems;

  // Don't render the section if no items
  if (!filteredItems.length) return null;

  return (
    <div className="my-3">
      <button className="w-full text-left" onClick={() => setIsOpen(!isOpen)}>
        <div className="py-4 px-2 bg-gray-200 rounded-2xl  hover:bg-gray-300 transition cursor-pointer">
          <div className="flex items-center justify-between">
            <strong className="text-gray-700 text-lg">
              {category?.card?.card?.title} (
              {category?.card?.card?.itemCards.length})
            </strong>
            <ChevronDownIcon
              className={`h-6 w-6 text-gray-600 transform transition-transform duration-300 ${
                isOpen ? "rotate-180" : "rotate-0"
              }`}
            />
          </div>
        </div>
      </button>
      {isOpen && (
        <ul>
          {filteredItems.map((foodItem) => (
            <li
              className="py-1 px-2 justify-between flex"
              key={foodItem?.card?.info?.id}
            >
              <p>{foodItem?.card?.info?.name}</p>
              <p>
                {"  ₹  "}
                {parseInt(foodItem?.card?.info?.price) / 100 ||
                  parseInt(foodItem?.card?.info?.defaultPrice) / 100}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
