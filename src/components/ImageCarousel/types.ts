import { ViewStyle } from "react-native";

export interface ImageCarouselProps {
  images: { uri: string }[];
  containerStyle?: ViewStyle;
  onIndexChanged?: (index: number) => void;
}
