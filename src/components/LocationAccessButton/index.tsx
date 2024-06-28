import * as Location from "expo-location";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchLocationData } from "../../api/location";
import { LocationObject } from "../../shared/types";
import { RootState } from "../../store";
import { AppActions } from "../../store/slices/app";
import { LocationActions } from "../../store/slices/location";
import IconButton from "../IconButton";
import Modal from "../Modal";
import { LocationAccessButtonProps } from "./types";

export default function LocationAccessButton({
  style,
  onAccessGranted,
  onAccessDenied,
}: LocationAccessButtonProps) {
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state: RootState) => state.app);

  const {
    locationPermissionStatus,
    isLocationPromptOpen,
    latitude,
    longitude,
    city,
    state,
  } = useSelector((state: RootState) => state.location);

  useEffect(() => {
    if (latitude && longitude && city && state) {
      onAccessGranted({ latitude, longitude, city, state });
      return;
    }

    Location.getForegroundPermissionsAsync().then((obj) => {
      dispatch(LocationActions.setLocationPermissionStatus(obj.status));
      if (obj.status === Location.PermissionStatus.GRANTED) {
        dispatch(AppActions.setIsLoading(true));
        sendLocationAPIRequest();
      }
    });
  }, []);

  const sendLocationAPIRequest = async () => {
    dispatch(AppActions.setIsLoading(true));
    fetchLocationData()
      .then((location) => {
        dispatch(LocationActions.setLocation(location));
        onAccessGranted(location);
      })
      .catch(() => {
        dispatch(
          AppActions.setSnackbar({
            message: "Failed to fetch location data",
            duration: 10000,
            visible: true,
          }),
        );
        console.log("Failed to fetch location data");
      })
      .finally(() => {
        dispatch(AppActions.setIsLoading(false));
      });
  };

  const handleAccessDenied = () => {
    dispatch(
      LocationActions.setLocationPermissionStatus(
        Location.PermissionStatus.DENIED,
      ),
    );
    onAccessDenied();
    dispatch(AppActions.setIsLoading(false));
  };

  const handleAccessGranted = async (obj: LocationObject) => {
    // we will have lat and long here
    // if city and state are needed, we can use a reverse geocode API
    if (!obj.city || !obj.state) {
      // reverse geocode
      dispatch(AppActions.setIsLoading(true));
      sendLocationAPIRequest();
    } else {
      onAccessGranted(obj);
      dispatch(AppActions.setIsLoading(false));
    }
  };

  const requestLocationPermission = async () => {
    // close the prompt
    dispatch(LocationActions.setIsLocationPromptOpen(false));
    dispatch(AppActions.setIsLoading(true));

    // request location permission
    const { status } = await Location.requestForegroundPermissionsAsync();

    // permission was denied
    if (status !== Location.PermissionStatus.GRANTED) {
      handleAccessDenied();
      return;
    }

    // permission granted. get location
    const location = await Location.getCurrentPositionAsync();
    dispatch(
      LocationActions.setLocationPermissionStatus(
        Location.PermissionStatus.GRANTED,
      ),
    );
    handleAccessGranted({
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
    });
  };

  const handleOnPress = async () => {
    if (isLoading) return;

    if (locationPermissionStatus === Location.PermissionStatus.GRANTED) {
      handleAccessGranted({
        latitude: latitude as number,
        longitude: longitude as number,
        city,
        state,
      });
    } else if (locationPermissionStatus === Location.PermissionStatus.DENIED) {
      handleAccessDenied();
    } else {
      openLocationPrompt();
    }
  };

  const openLocationPrompt = async () => {
    dispatch(LocationActions.setIsLocationPromptOpen(true));
  };

  return (
    <>
      <IconButton
        buttonStyle={{
          borderRadius: 4,
          ...style,
        }}
        type="rectangle"
        iconDimensions={{ width: 20, height: 20 }}
        icon="navigation"
        onPress={handleOnPress}
      />
      <Modal
        isVisible={isLocationPromptOpen}
        title="Location Access"
        text="Is it okay to use your location for personalized barber recommendations?"
        buttons={[
          {
            text: "No",
            onClick: () =>
              dispatch(LocationActions.setIsLocationPromptOpen(false)),
          },
          {
            text: "Yes",
            status: "primary",
            onClick: requestLocationPermission,
          },
        ]}
        onDismiss={() =>
          dispatch(LocationActions.setIsLocationPromptOpen(false))
        }
      />
    </>
  );
}
