import { StyleSheet } from "react-native";
import { generateSpacing } from "../../util/spacing-util";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: 4,
  },
  subContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: generateSpacing(2),
  },
  locationIcon: {
    width: 20,
    height: 20,
  },
  closeIcon: {
    width: 20,
    height: 20,
    paddingLeft: generateSpacing(1),
    paddingRight: generateSpacing(1),
  },
  locationInfoContainer: {
    flexDirection: "column",
    gap: generateSpacing(0.5),
  },
  locationIconButton: {},
});
