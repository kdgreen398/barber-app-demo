import { ViewStyle } from "react-native";
import { LocationObject } from "../../shared/types";

export interface LocationAccessButtonProps {
  style?: ViewStyle;
  onAccessGranted: (obj: LocationObject) => void;
  onAccessDenied: () => void;
}
