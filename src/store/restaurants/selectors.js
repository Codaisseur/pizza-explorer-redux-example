export const selectRestaurants = reduxState => {
  // I need to clone my array because otherwise .sort will edit the state directly!
  const clonedRestaurants = [...reduxState.restaurants.allRestaurants];

  return clonedRestaurants.sort((a, b) => {
    return a.name.toLowerCase().localeCompare(b.name.toLowerCase());
  });
};

export const selectRestaurantsThatSellPizza = pizzaId => reduxState => {
  return reduxState.restaurants.allRestaurants.filter(restaurant =>
    restaurant.pizzas.includes(pizzaId)
  );
};
