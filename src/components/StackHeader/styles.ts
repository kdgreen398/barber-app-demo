import { StyleSheet } from "react-native";
import { generateSpacing } from "../../util/spacing-util";

export default StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: generateSpacing(2),
    borderBottomWidth: 1,
  },
});
