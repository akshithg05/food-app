import { addItem, removeItem } from "../store/cartSlice";
import { CDN_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";

export default function FoodItem({ foodItem, showButton }) {
  const dispatch = useDispatch();

  function handleAddItem(name) {
    dispatch(addItem(name));
  }

  function handleRemoveItem(name) {
    dispatch(removeItem(name));
  }

  const cartItems = useSelector((store) => store?.cart?.items);
  const foodItemCount = cartItems.filter(
    (item) => item?.card?.info?.name === foodItem?.card?.info.name
  ).length;

  return (
    <div className="my-3 border-b border-gray-400 pb-3 bg-gray-100  p-3">
      <div className="flex justify-between items-center">
        <p>
          <strong>{foodItem?.card?.info?.name}</strong>
        </p>
        <p>
          <strong>
            ₹
            {(
              parseInt(
                foodItem?.card?.info?.price ??
                  foodItem?.card?.info?.defaultPrice
              ) / 100
            ).toFixed(2)}
          </strong>
        </p>
      </div>
      <div className="flex justify-between items-start gap-4 mt-2 ">
        <span className="flex-1">
          <p>{foodItem?.card?.info?.description}</p>
        </span>
        <span className="relative w-[150px] h-[150px] flex-shrink-0">
          <img
            className="w-full h-full object-cover rounded"
            src={CDN_URL + foodItem?.card?.info?.imageId}
            alt={foodItem?.card?.info?.name}
          />
          {showButton && (
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-3 px-4 py-2 bg-green-100 hover:bg-green-200 shadow-xl rounded-full text-sm font-semibold transition-all duration-200">
              <button
                className="cursor-pointer"
                onClick={() => handleRemoveItem(foodItem)}
              >
                −
              </button>

              <span className="min-w-[20px] text-center text-green-800 font-bold">
                {foodItemCount}
              </span>

              <button
                className="cursor-pointer"
                onClick={() => handleAddItem(foodItem)}
              >
                +
              </button>
            </div>
          )}
        </span>
      </div>
    </div>
  );
}
