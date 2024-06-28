import { Button, Icon, Text, useTheme } from "@ui-kitten/components";
import { View } from "react-native";
import { styles } from "./styles";
import { LocationCardProps } from "./types";

export default function LocationCard({
  onPress,
  city,
  state,
}: LocationCardProps) {
  const theme = useTheme();
  return (
    <Button style={styles.container} onPress={onPress}>
      <View>
        <View style={styles.subContent}>
          <Icon
            style={styles.locationIcon}
            fill={theme["color-basic-200"]}
            name="navigation"
          />
          <View style={styles.locationInfoContainer}>
            <Text>{city}</Text>
            <Text
              style={{
                color: theme["color-basic-200"],
              }}
            >
              {state}
            </Text>
          </View>
        </View>
      </View>
    </Button>
  );
}
