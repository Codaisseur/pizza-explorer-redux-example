// src/components/PizzaList.js
import { useSelector } from "react-redux";
import { selectUser } from "../store/user/selectors";

export default function PizzaList() {
  const user = useSelector(selectUser);

  return (
    <div>
      <h1>Pizza Explorer</h1>
      <p>
        Welcome back, <strong>{user.name}</strong>!
      </p>
      <p>TODO: the list of pizzas</p>
    </div>
  );
}
