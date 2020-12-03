// src/store/restaurants/reducer.js
const initialState = {
  allRestaurants: [
    {
      name: "Sotto Pizza",
      id: 56642,
      pizzas: [67283, 357311],
    },
    {
      name: "I Pazzi",
      id: 56643,
      pizzas: [161235],
    },
    {
      name: "Pizza Napoli",
      id: 56644,
      pizzas: [161235, 357311],
    },
    {
      name: "Eatmosfera",
      id: 56645,
      pizzas: [67283, 161235],
    },
  ],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    default: {
      return state;
    }
  }
}
