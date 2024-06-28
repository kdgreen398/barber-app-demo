import { Image, View } from "react-native";
import useGetAppDimensions from "../../../shared/hooks/dimensions";
import { generateSpacing } from "../../../util/spacing-util";

export default function PhotoView({ images }: { images: { uri: string }[] }) {
  const { width: screenWidth } = useGetAppDimensions();

  const imageDimensions = (screenWidth - generateSpacing(5)) / 2;

  return (
    <View
      style={{
        gap: generateSpacing(1),
        flexDirection: "row",
        flexWrap: "wrap",
      }}
    >
      {images.map((image, index) => (
        <Image
          key={image.uri + index}
          source={{ uri: image.uri }}
          style={{
            width: imageDimensions,
            height: imageDimensions,
            borderRadius: 4,
          }}
        />
      ))}
    </View>
  );
}
