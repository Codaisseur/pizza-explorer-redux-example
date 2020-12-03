// src/components/PizzaList.js
import { useSelector } from "react-redux";
import { selectRestaurants } from "../store/restaurants/selectors";

export default function RestaurantList() {
  const restaurants = useSelector(selectRestaurants);

  return (
    <div>
      <h1>Restaurants</h1>
      <ul>
        {restaurants.map(restaurant => (
          <li key={restaurant.id}>{restaurant.name}</li>
        ))}
      </ul>
    </div>
  );
}
