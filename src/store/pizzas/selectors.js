export const selectPizzas = reduxState => {
  // I need to clone my array because otherwise .sort will edit the state directly!
  const clonedPizzas = [...reduxState.pizzas.allPizzas];

  return clonedPizzas.sort((a, b) => {
    return b.bought - a.bought;
  });
};
