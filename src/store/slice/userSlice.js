import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: { name: "", email: "" },
  reducers: {
    setUser: (state, action) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
    },
    clearUser: (state) => {
      state.name = "";
      state.email = "";
    },
  },
});

export const { setUser, clearUser } = userSlice.actions;
const userReducer = userSlice.reducer;

export default userReducer;
