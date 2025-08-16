import { useMemo, useState } from "react";
import { nThPrime } from "../utils/nth-prime-number";
import Demo from "./Demo";

export default function Contact() {
  const [number, setNumber] = useState(0);
  const [isDark, setIsDark] = useState(false);

  function handleNameChange(e) {
    setNumber(e.target.value);
  }

  function handleThemeToggle() {
    setIsDark(!isDark);
  }

  // Heavy operartion
  function findPrime(num) {
    console.log("This is called");
    return nThPrime(num);
  }

  // const prime = findPrime(number)
  const prime = useMemo(() => findPrime(number), [number]);

  return (
    <div className="mx-25 ">
      <h1 className=" py-2 mb-2 text-3xl font-bold">Contact us!</h1>
      <div
        className={`p-8 ${
          isDark ? "bg-black  text-white" : ""
        }  w-[70%] border border-black`}
      >
        <div className={` flex justify-between `}>
          <input
            className="border-1 rounded-lg p-2 my-2 bg-gray-500"
            placeholder="Enter number"
            onChange={handleNameChange}
            type="number"
          />
          <button
            className="bg-purple-600  px-2 rounded-sm cursor-pointer hover:bg-purple-800"
            onClick={handleThemeToggle}
          >
            {" "}
            Change Theme
          </button>
          <p>Prime number: {prime}</p>
        </div>
      </div>
      <div>
        <input
          className="border-1 rounded-lg p-1 my-2"
          placeholder="Enter name"
        />
      </div>
      <div>
        <input className="border-1 rounded-lg p-1" placeholder="Enter email" />
      </div>
      <button className="shadow-lg hover:bg-green-600 cursor-pointer my-2 rounded-lg  p-2 bg-green-200 hover:text-white">
        Submit
      </button>
      <Demo />
    </div>
  );
}
