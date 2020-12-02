// src/store/user/reducer.js
const initialState = {
  name: "Helva",
  id: 42,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    default: {
      return state;
    }
  }
}
