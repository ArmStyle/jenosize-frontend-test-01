// Action type
export const INCREMENT_COUNTER = "INCREMENT_COUNTER";
export const DECREMENT_COUNTER = "DECREMENT_COUNTER";

// Action Create
export const incrementCounter = (value) => {
  return { type: INCREMENT_COUNTER, payload: value };
};

export const decrementCounter = (value) => {
  return { type: DECREMENT_COUNTER, payload: value };
};
