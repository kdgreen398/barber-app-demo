import { ViewStyle } from "react-native";

export interface IconButtonProps {
  containerStyle?: ViewStyle;
  buttonStyle?: ViewStyle;
  size?: "tiny" | "small" | "medium" | "large" | "giant";
  onPress: () => void;
  appearance?: "filled" | "outline" | "ghost";
  icon: string;
  caption?: string;
  type?: "circle" | "rectangle";
  iconDimensions?: {
    width: number;
    height: number;
  };
  disabled?: boolean;
  status?: "basic" | "primary" | "success" | "info" | "warning" | "danger";
  loading?: boolean;
}
