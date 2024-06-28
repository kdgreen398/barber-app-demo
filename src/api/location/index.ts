import * as Location from "expo-location";
import axios from "../axios";

export const fetchLocationData = async () => {
  const location = await Location.getCurrentPositionAsync();
  const { latitude, longitude } = location.coords;
  const response = await axios.get(
    "/common/location/get-location-from-coords",
    {
      headers: {
        lat: latitude,
        lng: longitude,
      },
    },
  );
  return {
    latitude,
    longitude,
    city: response.data.payload.city,
    state: response.data.payload.state,
  };
};

export const fetchAvailableCities = async () => {
  const response = await axios.get("/common/location/get-available-cities");
  return response.data.payload;
};
