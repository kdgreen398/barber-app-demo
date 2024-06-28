import { Icon, Text, useTheme } from "@ui-kitten/components";
import moment from "moment/moment";
import { View } from "react-native";
import { generateSpacing } from "../../util/spacing-util";
import { ReviewCardProps } from "./types";

export default function ReviewCard({
  name,
  description,
  rating,
  createdTimestamp,
}: ReviewCardProps) {
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
          <Text style={{ color: theme["color-basic-200"] }}>
            {moment(createdTimestamp).fromNow()}
          </Text>
        </View>
        <Text category="p1" style={{ fontFamily: "LibreFranklin_600SemiBold" }}>
          {[...new Array(rating)].map((_, index) => (
            <Icon
              key={index}
              name="star"
              fill={theme["color-warning-500"]}
              style={{
                width: 12,
                height: 12,
              }}
            />
          ))}
        </Text>
      </View>
      {description ? <Text>{description}</Text> : null}
    </View>
  );
}
