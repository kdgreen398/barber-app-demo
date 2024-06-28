import { Text, useTheme } from "@ui-kitten/components";
import { View } from "react-native";
import { generateSpacing } from "../../util/spacing-util";
import { ServiceCardProps } from "./types";

export default function ServiceCard({
  name,
  description,
  price,
  hours,
  minutes,
}: ServiceCardProps) {
  const theme = useTheme();
  return (
    <View
      style={{
        width: "100%",
        gap: generateSpacing(1),
        padding: generateSpacing(2),
        paddingBottom: generateSpacing(3),
        borderBottomColor: theme["color-basic-1000"],
        borderBottomWidth: 1,
      }}
    >
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <View>
          <Text
            category="h6"
            style={{ fontFamily: "LeagueSpartan_600SemiBold" }}
          >
            {name}
          </Text>
          <View>
            {hours ? (
              <Text style={{ color: theme["color-basic-200"] }}>
                {hours} {hours === 1 ? "hour" : "hours"}
              </Text>
            ) : null}
            {minutes ? (
              <Text style={{ color: theme["color-basic-200"] }}>
                {minutes} {minutes === 1 ? "minute" : "minutes"}
              </Text>
            ) : null}
          </View>
        </View>
        <Text category="p1" style={{ fontFamily: "LibreFranklin_600SemiBold" }}>
          ${price}
        </Text>
      </View>
      {description ? <Text>{description}</Text> : null}
    </View>
  );
}
