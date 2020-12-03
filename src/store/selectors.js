export const selectRestaurantsWithPizzas = reduxState => {
  // .map returns a new (cloned) array so I don't have to worry about cloning it
  return reduxState.restaurants.allRestaurants
    .map(restaurant => {
      // replace each restaurant with a new object...
      return {
        // ...that contains everything from the original restaurant...
        ...restaurant,
        // ...but also replaces the pizzas array...
        pizzas: restaurant.pizzas.map(pizzaId =>
          // ...so that it contains a list of pizzas instead of a list of ids
          reduxState.pizzas.allPizzas.find(pizza => pizza.id === pizzaId)
        ),
      };
    })
    .sort((a, b) => {
      return a.name.toLowerCase().localeCompare(b.name.toLowerCase());
    });
};

export const selectPizzasSoldByRestaurant = restaurantId => reduxState => {
  const restaurant = reduxState.restaurants.allRestaurants.find(
    restaurant => restaurant.id === restaurantId
  );

  if (!restaurant) {
    return [];
  }

  return restaurant.pizzas.map(pizzaId =>
    reduxState.pizzas.allPizzas.find(pizza => pizza.id === pizzaId)
  );
};
