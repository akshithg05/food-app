import { useDispatch, useSelector } from "react-redux";
import FoodItem from "./FoodItem";
import { clearCart } from "../store/cartSlice";

export default function Cart() {
  const cartItems = useSelector((store) => store?.cart?.items);
  const dispatch = useDispatch();

  function clearTheCart() {
    dispatch(clearCart());
  }

  return (
    <div className=" my-3 mx-40">
      <div className="flex justify-between ">
        <h1 data-testid="cart" className=" mx-25 text-4xl font-bold">
          Cart
        </h1>
        <button
          onClick={clearTheCart}
          className="p-2 rounded-xl cursor-pointer bg-red-200  font-bold hover:bg-red-400 transition"
        >
          Clear cart
        </button>
      </div>
      <div
        className={`mx-25 ${
          cartItems.length === 0 ? "" : "bg-gray-100"
        } rounded-2xl`}
      >
        {cartItems.length > 0 ? (
          <ul>
            {cartItems.map((foodItem, index) => (
              <li className="px-2" key={index}>
                <FoodItem foodItem={foodItem} showButton={false} />
              </li>
            ))}
          </ul>
        ) : (
          <p className="my-5">There are no items in the cart to display</p>
        )}
      </div>
    </div>
  );
}
