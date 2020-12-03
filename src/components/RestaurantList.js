// src/components/PizzaList.js
import { useSelector } from "react-redux";
import { selectRestaurantsWithPizzas } from "../store/selectors";

export default function RestaurantList() {
  const restaurants = useSelector(selectRestaurantsWithPizzas);

  return (
    <div>
      <h1>Restaurants</h1>
      <ul>
        {restaurants.map(restaurant => (
          <li key={restaurant.id}>
            {restaurant.name}
            <ul>
              {restaurant.pizzas.map(pizza => (
                <li key={pizza.id}>{pizza.name}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}
