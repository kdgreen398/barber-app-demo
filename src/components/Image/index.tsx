import { Spinner, useTheme } from "@ui-kitten/components";
import { useState } from "react";
import { ImageSourcePropType, Image as RNImage, View } from "react-native";

import { ImageStyle, StyleProp } from "react-native";

export default function Image({
  source,
  style,
  width,
  height,
}: {
  width: number;
  height: number;
  source: ImageSourcePropType;
  style?: StyleProp<ImageStyle>;
}) {
  const theme = useTheme();
  const [loading, setLoading] = useState(true);
  console.log("loading", loading, source);
  return (
    <>
      {loading && (
        <View
          style={{
            minWidth: width,
            minHeight: height,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: theme["color-basic-900"] + "55",
            borderRadius: 4,
          }}
        >
          <Spinner size="tiny" />
        </View>
      )}
      <RNImage
        source={source}
        style={{ width, height: loading ? 0 : height, ...(style as object) }}
        onLoadEnd={() => {
          setLoading(false);
          console.log("loaded");
        }}
      />
    </>
  );
}
