import { BarberProfileScreenParams } from "../../screens/BarberProfileScreen/types";

export type RootStackParamList = {
  SearchScreen: undefined;
  ResultScreen: { city: string; state: string };
  BarberProfileScreen: BarberProfileScreenParams;
};

export type RootDrawerParamList = {
  Search: undefined;
  Login: undefined;
  Signup: undefined;
};

export type LocationObject = {
  latitude: number;
  longitude: number;
  city?: string;
  state?: string;
  stateShorthand?: string;
};
