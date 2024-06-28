import { StyleService } from "@ui-kitten/components";
import { generateSpacing } from "../../util/spacing-util";
import { PROFILE_SCREEN_AVATAR_SIZE } from "./constant";

export const styles = StyleService.create({
  container: {
    flex: 1,
    gap: generateSpacing(2),
  },
  paddingX: {
    paddingLeft: generateSpacing(2),
    paddingRight: generateSpacing(2),
  },
  backButton: {
    position: "absolute",
    top: generateSpacing(2),
    left: generateSpacing(2),
  },
  avatar: {
    marginLeft: generateSpacing(2),
    position: "relative",
    top: -35,
    width: PROFILE_SCREEN_AVATAR_SIZE,
    height: PROFILE_SCREEN_AVATAR_SIZE,
    borderWidth: 3,
    borderColor: "color-basic-800",
    borderRadius: 1000,
  },
  compactHeader: {
    position: "absolute",
    alignItems: "center",
    flexDirection: "row",
    gap: generateSpacing(1),
    left: PROFILE_SCREEN_AVATAR_SIZE + generateSpacing(3),
  },
  barberInfo: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    gap: generateSpacing(0.5),
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: generateSpacing(0.5),
  },
  bio: {
    color: "color-basic-600",
  },
  body: {
    position: "relative",
    top: -45,
  },
  bodyContent: {
    gap: generateSpacing(2),
  },
  quickActionButton: {
    width: 100,
    height: 34,
  },
  tabIndicator: {
    borderRadius: 0,
    height: 1,
    backgroundColor: "color-basic-100",
  },
});
