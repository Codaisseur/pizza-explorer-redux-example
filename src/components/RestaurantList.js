// src/components/PizzaList.js
import { useSelector } from "react-redux";
import { selectPizzasSoldByRestaurant } from "../store/selectors";
import { selectPizzas } from "../store/pizzas/selectors";
import { useState } from "react";
import {
  selectRestaurants,
  selectRestaurantsThatSellPizza,
} from "../store/restaurants/selectors";

export default function RestaurantList() {
  const restaurants = useSelector(selectRestaurants);
  const pizzas = useSelector(selectPizzas);

  const [selectedPizza, setSelectedPizza] = useState(pizzas[0].id);
  const [selectedRestaurant, setSelectedRestaurant] = useState(
    restaurants[0].id
  );

  const restaurantsThatSellSelectedPizza = useSelector(
    selectRestaurantsThatSellPizza(selectedPizza)
  );

  const pizzasSoldBySelectedRestaurant = useSelector(
    selectPizzasSoldByRestaurant(selectedRestaurant)
  );

  return (
    <div>
      <h1>Restaurants</h1>
      <h2>
        What does{" "}
        <select
          value={selectedRestaurant}
          onChange={e => {
            setSelectedRestaurant(parseInt(e.target.value));
          }}
        >
          {restaurants.map(restaurant => (
            <option key={restaurant.id} value={restaurant.id}>
              {restaurant.name}
            </option>
          ))}
        </select>{" "}
        sell?
      </h2>
      <ul>
        {pizzasSoldBySelectedRestaurant.map(pizza => (
          <li key={pizza.id}>{pizza.name}</li>
        ))}
      </ul>

      <h2>
        Who sells{" "}
        <select
          value={selectedPizza}
          onChange={e => {
            setSelectedPizza(parseInt(e.target.value));
          }}
        >
          {pizzas.map(pizza => (
            <option key={pizza.id} value={pizza.id}>
              {pizza.name}
            </option>
          ))}
        </select>{" "}
        ?
      </h2>
      <ul>
        {restaurantsThatSellSelectedPizza.map(restaurant => (
          <li key={restaurant.id}>{restaurant.name}</li>
        ))}
      </ul>
    </div>
  );
}
