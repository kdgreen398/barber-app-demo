import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { Image, Pressable } from "react-native";
import { RootStackParamList } from "../../shared/types";
import { LogoButtonProps } from "./types";

export default function LogoButton({ scale = 1, disabled }: LogoButtonProps) {
  const stackNavigation =
    useNavigation<StackNavigationProp<RootStackParamList>>();

  const width = 146 * scale;
  const height = 37 * scale;

  return (
    <Pressable
      disabled={disabled}
      onPress={() => stackNavigation.navigate("SearchScreen")}
      style={{ alignItems: "center" }}
    >
      <Image
        source={require("../../../assets/fadeaway-logo.png")}
        style={{ width, height }}
      />
    </Pressable>
  );
}
