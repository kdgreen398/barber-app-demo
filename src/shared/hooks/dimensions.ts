import { useWindowDimensions } from "react-native";
import { MAX_WIDTH } from "../constant";

export default function useGetAppDimensions() {
  const width = useWindowDimensions().width;
  const height = useWindowDimensions().height;

  return { width: width > MAX_WIDTH ? MAX_WIDTH : width, height };
}
