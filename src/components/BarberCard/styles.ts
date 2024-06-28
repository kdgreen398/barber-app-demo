import { StyleSheet } from "react-native";
import { generateSpacing } from "../../util/spacing-util";

export const styles = StyleSheet.create({
  container: {
    paddingTop: generateSpacing(2),
    paddingBottom: generateSpacing(2),
    gap: generateSpacing(2),
  },
  header: {
    paddingLeft: generateSpacing(2),
    paddingRight: generateSpacing(2),
    flexDirection: "row",
    alignItems: "center",
    gap: generateSpacing(1.5),
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
  },
  content: {
    marginTop: 10,
  },
});
