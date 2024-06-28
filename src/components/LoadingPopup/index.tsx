import { Spinner, Modal as UIKModal } from "@ui-kitten/components";
import React from "react";
import { View } from "react-native";
import theme from "../../../theme";
import { LoadingProps } from "./types";

export default function LoadingPopup({ isVisible }: LoadingProps) {
  return (
    <UIKModal
      visible={isVisible}
      backdropStyle={{ backgroundColor: theme["color-basic-transparent-600"] }}
    >
      <View>
        <Spinner size="giant" />
      </View>
    </UIKModal>
  );
}
