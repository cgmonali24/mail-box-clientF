// src/redux/authSlice.js
import { createSlice } from '@reduxjs/toolkit';

// Retrieve the initial token from localStorage
const initialToken = localStorage.getItem('token');

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isLoggedIn: !!initialToken, // If token exists, user is considered logged in
    token: initialToken,
  },
  reducers: {
    login: (state, action) => {
      state.isLoggedIn = true;
      state.token = action.payload.token;
      localStorage.setItem('token', action.payload.token); // Save token to localStorage
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.token = null;
      localStorage.removeItem('token'); // Remove token from localStorage
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;