import { View } from "react-native";
import ReviewCard from "../../../components/ReviewCard";
import { generateSpacing } from "../../../util/spacing-util";

export default function ReviewView() {
  return (
    <View
      style={{
        gap: generateSpacing(1),
        flexDirection: "row",
        flexWrap: "wrap",
      }}
    >
      <ReviewCard
        name="Kevin Chan"
        description="He did really well on my hair."
        createdTimestamp={new Date().toISOString()}
        rating={5}
      />
      <ReviewCard
        name="John Lewis"
        description="Amazing Service! I will definitely come back."
        createdTimestamp={new Date().toISOString()}
        rating={5}
      />
      <ReviewCard
        name="Jacob Freeman"
        createdTimestamp={new Date().toISOString()}
        rating={2}
      />
    </View>
  );
}
