import { StyleSheet } from "react-native";
import { generateSpacing } from "../../util/spacing-util";

export const styles = StyleSheet.create({
  container: {
    padding: generateSpacing(2),
    gap: generateSpacing(2),
    maxHeight: "100%",
  },
  searchContainer: {
    flexDirection: "column",
    gap: generateSpacing(0.5),
    alignItems: "center",
  },
  searchRow: {
    width: "100%",
    flexDirection: "row",
    gap: generateSpacing(0.5),
    alignItems: "center",
  },
  searchInput: {
    flexShrink: 1,
    flexGrow: 1,
    borderTopRightRadius: 2,
    borderBottomRightRadius: 2,
  },
  searchIconButton: {
    width: 48,
    height: 48,
    borderRadius: 4,
    borderTopLeftRadius: 2,
    borderBottomLeftRadius: 2,
  },
  locationDeniedButton: {
    width: "100%",
  },
  recentSection: {
    flexDirection: "column",
    gap: generateSpacing(1),
    marginTop: generateSpacing(2),
  },
  noLocationContainer: {
    padding: generateSpacing(1),
    borderRadius: 4,
    flexDirection: "row",
    alignItems: "center",
    gap: generateSpacing(1),
  },
});
