import { useState, useRef } from "react";
export default function Demo() {
  const [y, setY] = useState(0);
  let x = 0;

  let ref = useRef(0);

  return (
    <div>
      <div className="border border-black p-8 m-4">
        <div className="flex justify-between pb-5">
          <p className="p-4">{x}</p>
          <button
            onClick={() => {
              console.log("Let variable (x) :", x);
              x = x + 1;
            }}
            className="px-4 py-2 cursor-pointer bg-purple-600 hover:bg-purple-800 text-white rounded-sm"
          >
            Add X (let variable)
          </button>
        </div>
        <div className="flex justify-between">
          <p className="p-4">{y}</p>
          <button
            onClick={() => {
              console.log("State variable updated (check UI):", y);
              setY(y + 1);
            }}
            className="px-4 py-2 cursor-pointer bg-purple-600 hover:bg-purple-800 text-white rounded-sm"
          >
            Add Y (State variable)
          </button>
        </div>
        <div className="flex justify-between pt-5">
          <p className="p-4">{ref.current}</p>
          <button
            onClick={() => {
              console.log("Ref value : ", ref.current);
              ref.current = ref.current + 1;
            }}
            className="px-4 py-2 cursor-pointer bg-purple-600 hover:bg-purple-800 text-white rounded-sm"
          >
            Add Ref
          </button>
        </div>
      </div>
    </div>
  );
}
