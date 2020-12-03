// src/components/PizzaList.js
import { useSelector } from "react-redux";
import { selectRestaurantsWithPizzas } from "../store/selectors";
import { selectPizzas } from "../store/pizzas/selectors";
import { useState } from "react";

export default function RestaurantList() {
  const restaurants = useSelector(selectRestaurantsWithPizzas);
  const pizzas = useSelector(selectPizzas);

  const [selectedPizza, setSelectedPizza] = useState(pizzas[0].id);

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
    </div>
  );
}
