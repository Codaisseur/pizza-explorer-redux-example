export const addPizza = ({ name, description }) => ({
  type: "pizzas/add",
  payload: {
    name,
    description,
    id: Math.random(),
  },
});
