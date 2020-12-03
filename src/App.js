import PizzaList from "./components/PizzaList";
import RestaurantList from "./components/RestaurantList";
import AddPizzaForm from "./components/AddPizzaForm";

function App() {
  return (
    <div className="App">
      <PizzaList />
      <AddPizzaForm />
      <RestaurantList />
    </div>
  );
}

export default App;
