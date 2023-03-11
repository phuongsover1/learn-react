import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialCounterState = { counter: 0, showCounter: true };
const counterSlice = createSlice({
  name: 'counter',
  initialState: initialCounterState,
  reducers: {
    increment(state) {
      state.counter++;
    },

    increase(state, action) {
      state.counter += action.payload;
    },
    decrement(state) {
      state.counter--;
    },
    toggle(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

export const counterActions = counterSlice.actions;

const initialAuthState = { isAuthenticate: false };
const authSlice = createSlice({
  name: 'authentication',
  initialState: initialAuthState,
  reducers: {
    login(state) {
      state.isAuthenticate = true;
    },
    logout(state) {
      state.isAuthenticate = false;
    },
  },
});

export const authActions = authSlice.actions;

const store = configureStore({
  reducer: { counter: counterSlice.reducer, auth: authSlice.reducer },
});

export default store;
