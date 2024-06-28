import { View } from "react-native";
import ServiceCard from "../../../components/ServiceCard";
import { generateSpacing } from "../../../util/spacing-util";

export default function ServiceView() {
  return (
    <View
      style={{
        gap: generateSpacing(1),
        flexDirection: "row",
        flexWrap: "wrap",
      }}
    >
      <ServiceCard
        name="Haircut"
        description="A simple haircut."
        price={20}
        hours={0}
        minutes={30}
      />
      <ServiceCard name="Haircut" price={20} hours={0} minutes={30} />
    </View>
  );
}
