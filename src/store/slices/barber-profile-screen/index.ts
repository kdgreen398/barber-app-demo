import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { BarberData, BarberProfileScreenState } from "./types";

const initialState: BarberProfileScreenState = {
  barber: undefined,
  isLoading: false,
};

export const BarberProfileScreenSlice = createSlice({
  name: "BarberProfileScreen",
  initialState,
  reducers: {
    setBarber: (state, action: PayloadAction<BarberData>) => {
      state.barber = action.payload;
    },
    setIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
  },
});
export const BarberProfileScreenActions = BarberProfileScreenSlice.actions;
export const BarberProfileScreenReducer = BarberProfileScreenSlice.reducer;
