// src/components/PizzaList.js
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../store/user/selectors";
import { selectPizzas } from "../store/pizzas/selectors";
import { toggleFavorite } from "../store/user/actions";

import "./PizzaList.scss";

export default function PizzaList() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const pizzas = useSelector(selectPizzas);

  return (
    <div className="PizzaList">
      <h1>Pizza Explorer</h1>
      <p>
        Welcome back, <strong>{user.name}</strong>! There are{" "}
        <strong>{pizzas.length}</strong> pizzas in total:
      </p>
      <ul className="Pizzas">
        {pizzas.map(pizza => (
          <li
            key={pizza.id}
            className="Pizza"
            style={{ backgroundImage: `url(${pizza.image})` }}
          >
            <button
              onClick={() => {
                dispatch(toggleFavorite(pizza.id));
              }}
              className={`FavToggle ${
                user.favorites.includes(pizza.id) ? "fav" : ""
              }`}
            >
              {user.favorites.includes(pizza.id) ? "♥" : "♡"}
            </button>
            <div className="Overlay">
              <strong>{pizza.name}</strong> ({pizza.description}) <br />
              <em>Bought {pizza.bought} times</em>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
