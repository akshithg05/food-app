import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const {
    name,
    costForTwo,
    cuisines,
    avgRatingString,
    cloudinaryImageId,
    sla,
  } = resData?.info;
  return (
    <div className="m-3 p-3 w-[200px] shadow-xl rounded-xl h-115 overflow-hidden bg-gray-200 hover:bg-gray-300">
      <img className="rounded-xl" src={`${CDN_URL}${cloudinaryImageId}`} />
      <h3 className="py-3 font-bold text-lg">{name}</h3>
      <h4>{costForTwo}</h4>
      <h4>{cuisines.join(" ")}</h4>
      <h4>Rating: {avgRatingString}</h4>
      <h4>{sla?.deliveryTime} minutes</h4>
    </div>
  );
};

export default RestaurantCard;
