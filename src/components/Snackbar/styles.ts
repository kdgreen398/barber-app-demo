import { StyleService } from "@ui-kitten/components";
import { generateSpacing } from "../../util/spacing-util";

export const styles = StyleService.create({
  snackbar: {
    position: "absolute",
    left: generateSpacing(2),
    right: generateSpacing(2),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  button: {
    width: "100%",
    justifyContent: "flex-start",

    borderColor: "color-basic-1000",
    borderWidth: 2,
  },
  action: {
    color: "color-primary-500",
    fontWeight: "bold",
  },
});
