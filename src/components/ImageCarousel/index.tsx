import { useTheme } from "@ui-kitten/components";
import React, { useEffect } from "react";
import { Platform, Pressable, ScrollView, View } from "react-native";
import Swiper from "react-native-web-swiper";
import useGetAppDimensions from "../../shared/hooks/dimensions";
import { generateSpacing } from "../../util/spacing-util";
import IconButton from "../IconButton";
import Image from "../Image";
import { ImageCarouselProps } from "./types";

const minHeight = 405;

export default function ImageCarousel({
  images,
  containerStyle,
  onIndexChanged,
}: ImageCarouselProps) {
  const theme = useTheme();
  const { width } = useGetAppDimensions();
  const swiperRef = React.useRef<Swiper>(null);
  const scrollViewRef = React.useRef<ScrollView>(null);
  const [currentItemIndex, setCurrentItemIndex] = React.useState(0);

  useEffect(() => {
    scrollViewRef.current?.scrollTo({
      x: currentItemIndex * 40,
      animated: true,
    });
  }, [currentItemIndex]);

  const handleOnIndexChanged = (index: number) => {
    setCurrentItemIndex(index);
    onIndexChanged && onIndexChanged(index);
  };

  return (
    <View style={[{ minHeight, flex: 1, overflow: "hidden" }, containerStyle]}>
      <Swiper
        containerStyle={{ minHeight }}
        ref={swiperRef}
        controlsEnabled={false}
        onIndexChanged={handleOnIndexChanged}
      >
        {images.map((image, index) => (
          <Image
            key={index}
            source={{ uri: image.uri }}
            width={width}
            height={minHeight}
            style={{ width, flex: 1 }}
          />
        ))}
      </Swiper>
      <View
        style={{
          flex: 1,
          paddingVertical: generateSpacing(1),
          alignItems: "center",
        }}
      >
        <ScrollView
          ref={scrollViewRef}
          horizontal
          // showsHorizontalScrollIndicator={false}
          style={{ maxWidth: "100%" }}
          contentContainerStyle={{
            paddingHorizontal: generateSpacing(1),
            gap: generateSpacing(1),
          }}
        >
          {images.map((_, index) => (
            <Pressable
              key={index}
              onPress={() => swiperRef.current?.goTo(index)}
            >
              <Image
                source={images[index]}
                width={45}
                height={45}
                style={{
                  borderRadius: 4,
                  opacity: index === currentItemIndex ? 1 : 0.3,
                }}
              />
            </Pressable>
          ))}
        </ScrollView>
      </View>

      <IconButton
        appearance="ghost"
        buttonStyle={{
          backgroundColor: theme["color-basic-transparent-300"],
        }}
        containerStyle={{
          display:
            Platform.OS !== "web" || currentItemIndex === 0 ? "none" : "flex",
          position: "absolute",
          top: minHeight / 2 - 12,
          left: generateSpacing(1),
        }}
        size="small"
        iconDimensions={{ width: 24, height: 24 }}
        type="circle"
        icon="arrow-ios-back-outline"
        onPress={() => swiperRef.current?.goToPrev()}
      />

      <IconButton
        appearance="ghost"
        buttonStyle={{
          backgroundColor: theme["color-basic-transparent-200"],
        }}
        containerStyle={{
          display:
            Platform.OS !== "web" || currentItemIndex === images.length - 1
              ? "none"
              : "flex",
          position: "absolute",
          top: minHeight / 2 - 12,
          right: generateSpacing(1),
        }}
        size="small"
        iconDimensions={{ width: 24, height: 24 }}
        type="circle"
        icon="arrow-ios-forward-outline"
        onPress={() => swiperRef.current?.goToNext()}
      />
    </View>
  );
}
