import { restaurantList } from "../config";
import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [restaurants, setRestaurants] = useState(restaurantList);
  return (
    <>
      <div className="restaurant-list">
        {restaurants.map((restaurant) => {
          return (
            <Link
              to={"/restaurant/" + restaurant.data.id}
              style={{ textDecoration: "none" }}
              key={restaurant.data.id}
            >
              <RestaurantCard {...restaurant.data} />
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Home;
