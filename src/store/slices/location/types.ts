import { PermissionStatus } from "expo-location";

export interface LocationStateType {
  locationPermissionStatus: PermissionStatus;
  isLocationPromptOpen: boolean;
  latitude?: number;
  longitude?: number;
  city?: string;
  state?: string;
}
