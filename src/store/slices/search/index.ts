import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { SearchStateType } from "./types";

const initialState: SearchStateType = {
  availableCities: [
    { city: "New York", state: "NY" },
    { city: "Los Angeles", state: "CA" },
    { city: "Chicago", state: "IL" },
    { city: "Houston", state: "TX" },
    { city: "Miami", state: "FL" },
    { city: "San Francisco", state: "CA" },
    { city: "Seattle", state: "WA" },
    { city: "Boston", state: "MA" },
    { city: "Atlanta", state: "GA" },
    { city: "Dallas", state: "TX" },
    { city: "Philadelphia", state: "PA" },
    { city: "Phoenix", state: "AZ" },
    { city: "Denver", state: "CO" },
    { city: "San Diego", state: "CA" },
    { city: "Austin", state: "TX" },
    { city: "Nashville", state: "TN" },
    { city: "Portland", state: "OR" },
    { city: "Charlotte", state: "NC" },
    { city: "Las Vegas", state: "NV" },
    { city: "San Antonio", state: "TX" },
    { city: "Orlando", state: "FL" },
    { city: "Minneapolis", state: "MN" },
    { city: "San Jose", state: "CA" },
    { city: "Detroit", state: "MI" },
    { city: "Washington", state: "DC" },
    { city: "Baltimore", state: "MD" },
    { city: "Salt Lake City", state: "UT" },
    { city: "Kansas City", state: "MO" },
    { city: "Indianapolis", state: "IN" },
  ],
};

export const SearchSlice = createSlice({
  name: "Search",
  initialState,
  reducers: {
    setAvailableCities: (
      state,
      action: PayloadAction<{ city: string; state: string }[]>,
    ) => {
      state.availableCities = action.payload;
    },
  },
});
export const SearchActions = SearchSlice.actions;
export const SearchReducer = SearchSlice.reducer;
