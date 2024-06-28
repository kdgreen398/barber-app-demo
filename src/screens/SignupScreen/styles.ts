import { StyleService } from "@ui-kitten/components";
import theme from "../../../theme";
import { generateSpacing } from "../../util/spacing-util";

export const styles = StyleService.create({
  container: {
    padding: generateSpacing(2),
    gap: generateSpacing(4),
    alignItems: "center",
    justifyContent: "center",
  },
  section: {
    width: "100%",
    alignItems: "center",
    gap: generateSpacing(2),
  },
  input: {
    width: "100%",
  },
  button: {
    width: "100%",
  },
  grayText: {
    color: theme["color-basic-200"],
    textAlign: "center",
  },
  signUp: {
    marginTop: 10,
    color: theme["color-primary-500"],
  },
});
