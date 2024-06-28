import {
  Button,
  Icon,
  IconElement,
  IconProps,
  useTheme,
} from "@ui-kitten/components";
import React, { useEffect } from "react";
import { ScrollView, View } from "react-native";
import { generateSpacing } from "../../util/spacing-util";
import { CarouselControlsProps } from "./types";

const ChevronLeft = (props: IconProps): IconElement => (
  <Icon {...props} name="arrow-ios-back-outline" />
);

const ChevronRight = (props: IconProps): IconElement => (
  <Icon {...props} name="arrow-ios-forward-outline" />
);

export default function CarouselControls({
  onLeftClick,
  onRightClick,
  dotIndicatorComponent,
  totalItems,
  currentItemIndex,
}: CarouselControlsProps) {
  const scrollViewRef = React.useRef<ScrollView>(null);
  const theme = useTheme();

  useEffect(() => {
    scrollViewRef.current?.scrollTo({
      x: currentItemIndex * 40,
      animated: true,
    });
  }, [currentItemIndex]);

  const renderDotIndicator = () => {
    if (dotIndicatorComponent) {
      // render custom component
      return Array.from({ length: totalItems }).map((_, index) =>
        dotIndicatorComponent(index),
      );
    }
    // render a dot for each item
    return Array.from({ length: totalItems }).map((_, index) => (
      <View
        key={index}
        style={{
          width: 8,
          height: 8,
          borderRadius: 4,
          backgroundColor:
            index === currentItemIndex
              ? theme["color-basic-100"]
              : theme["color-basic-1000"],
        }}
      />
    ));
  };

  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Button
        appearance="ghost"
        accessoryLeft={ChevronLeft}
        onPress={onLeftClick}
      />
      <View style={{ flex: 1, alignItems: "center" }}>
        <ScrollView
          ref={scrollViewRef}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            gap: generateSpacing(1),
          }}
        >
          {renderDotIndicator()}
        </ScrollView>
      </View>
      <Button
        appearance="ghost"
        accessoryLeft={ChevronRight}
        onPress={onRightClick}
      />
    </View>
  );
}
