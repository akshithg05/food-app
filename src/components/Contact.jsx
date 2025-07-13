export default function Contact() {
  return (
    <div className="mx-25 ">
      <h1 className=" py-2 mb-2 text-3xl font-bold">Contact us!</h1>
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
    </div>
  );
}
