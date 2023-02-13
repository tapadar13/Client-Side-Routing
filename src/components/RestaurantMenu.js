import { IMG_CDN_URL } from "../config";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const { menuId } = useParams();
  //   console.log(menuId);

  const [restaurants, setRestaurants] = useState(null);

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    let data = await fetch(
      "https://www.swiggy.com/dapi/menu/v4/full?lat=19.0759837&lng=72.8776559&menuId=32399" +
        menuId
    );
    let jsonData = await data.json();

    // console.log(jsonData.data);
    setRestaurants(jsonData.data);
  }
  return !restaurants ? (
    <Shimmer />
  ) : (
    <div className="menu">
      <div>
        <img src={IMG_CDN_URL + restaurants?.cloudinaryImageId} />
        <h2>{restaurants?.name}</h2>
        <h3>{restaurants?.area}</h3>
        <h3>{restaurants?.city}</h3>
        <h3>{restaurants?.avgRating} stars</h3>
        <h3>{restaurants?.costForTwoMsg}</h3>
      </div>
      <div>
        <h1>Menu</h1>
        <ul>
          {Object.values(restaurants?.menu?.items).map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;
