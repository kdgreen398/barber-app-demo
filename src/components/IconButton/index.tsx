import { Button, Icon, Spinner, Text, useTheme } from "@ui-kitten/components";
import { Pressable, View } from "react-native";
import { generateSpacing } from "../../util/spacing-util";
import { IconButtonProps } from "./types";

const LoadingIndicator = (): React.ReactElement => (
  <View
    style={{
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <Spinner size="small" />
  </View>
);

export default function IconButton({
  containerStyle,
  buttonStyle,
  onPress,
  appearance,
  icon,
  iconDimensions,
  caption,
  type,
  size,
  disabled,
  status,
  loading,
}: IconButtonProps) {
  const theme = useTheme();
  return (
    <Pressable
      style={{
        gap: generateSpacing(1),
        alignItems: "center",
        ...containerStyle,
      }}
      onPress={onPress}
      disabled={disabled}
    >
      <Button
        style={{
          width: 45,
          height: 45,
          borderRadius: type === "rectangle" ? 4 : 1000,
          ...buttonStyle,
        }}
        disabled={disabled}
        status={status || "basic"}
        onPress={onPress}
        appearance={appearance || "filled"}
        size={size || "large"}
        accessoryLeft={() =>
          loading ? (
            <LoadingIndicator />
          ) : (
            <Icon
              name={icon}
              style={iconDimensions || { width: 30, height: 30 }}
              fill={theme["color-basic-100"]}
            />
          )
        }
      />
      {caption && (
        <Text style={{ fontFamily: "LeagueSpartan_400Regular" }}>
          {caption}
        </Text>
      )}
    </Pressable>
  );
}
