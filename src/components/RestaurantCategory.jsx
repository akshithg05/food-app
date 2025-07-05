import { ChevronDownIcon } from "@heroicons/react/24/solid";
import FoodItem from "./FoodItem";

export default function RestaurantCategory({
  category,
  vegOnly,
  activeIndex,
  index,
  setActiveIndex,
}) {
  const allItems = category?.card?.card?.itemCards || [];
  const filteredItems = vegOnly
    ? allItems.filter((foodItem) => foodItem?.card?.info?.isVeg)
    : allItems;

  // Don't render the section if no items
  if (!filteredItems.length) return null;

  return (
    <div className=" rounded-2xl m-3 shadow-xl">
      <button
        className="w-full text-left"
        onClick={() => setActiveIndex(activeIndex === index ? null : index)}
      >
        <div className="py-4 px-2 bg-gray-200 rounded-2xl  hover:bg-gray-300 transition cursor-pointer">
          <div className="flex items-center justify-between">
            <strong className="text-gray-700 text-lg">
              {category?.card?.card?.title} (
              {category?.card?.card?.itemCards.length})
            </strong>
            <ChevronDownIcon
              className={`h-6 w-6 text-gray-600 transform transition-transform duration-300 ${
                activeIndex === index ? "rotate-180" : "rotate-0"
              }`}
            />
          </div>
        </div>
      </button>
      <div className="bg-gray-100 rounded-2xl">
        {activeIndex === index && (
          <ul>
            {filteredItems.map((foodItem) => (
              <li className="px-2" key={foodItem?.card?.info?.id}>
                <FoodItem foodItem={foodItem} />
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
