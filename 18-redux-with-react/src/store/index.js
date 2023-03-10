import { legacy_createStore } from 'redux';

const counterReducer = (state = { counter: 0 }, action) => {
  if (action.type === 'increment') return { counter: state.counter + 1 };
  if (action.type === 'decrement') return { counter: state.counter - 1 };
  return state;
};

const store = legacy_createStore(counterReducer);

store.dispatch({ type: 'increment' });

export default store;
