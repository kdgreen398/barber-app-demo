import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { Avatar, Icon, Text, useTheme } from "@ui-kitten/components";
import React from "react";
import { Pressable, View } from "react-native";
import { useDispatch } from "react-redux";
import { RootStackParamList } from "../../shared/types";
import { AppActions } from "../../store/slices/app";
import IconButton from "../IconButton";
import ImageCarousel from "../ImageCarousel";
import { styles } from "./styles";
import { BarberCardProps } from "./types";

export default function BarberCard({
  alias,
  firstName,
  lastName,
  shop,
  averageRating,
  totalReviews,
  profileImage,
  headerImage,
  images,
}: BarberCardProps) {
  const theme = useTheme();
  const dispatch = useDispatch();
  const stackNavigation =
    useNavigation<StackNavigationProp<RootStackParamList>>();

  const navigateToProfileScreen = () => {
    stackNavigation.push("BarberProfileScreen", {
      name: firstName + " " + lastName,
      alias,
      shop,
      averageRating,
      totalReviews,
      images,
      profileImage,
      headerImage,
    });
  };

  return (
    <View style={styles.container}>
      <Pressable style={styles.header} onPress={navigateToProfileScreen}>
        <Avatar size="large" shape="round" source={{ uri: profileImage }} />
        <View>
          <Text category="h6">{alias || `${firstName} ${lastName}`}</Text>
          <Text category="p1" style={{ color: theme["color-basic-200"] }}>
            {shop}
          </Text>
          <View style={styles.ratingContainer}>
            <Icon
              name="star"
              style={{
                width: 16,
                height: 16,
              }}
              fill={theme["color-warning-500"]}
            />
            <Text category="p1">{averageRating.toFixed(1)}</Text>
            <Text category="p1" style={{ color: theme["color-basic-200"] }}>
              ({totalReviews})
            </Text>
          </View>
        </View>

        <IconButton
          containerStyle={{ marginLeft: "auto" }}
          onPress={() =>
            dispatch(AppActions.setIsAuthenticationModalOpen(true))
          }
          appearance="ghost"
          icon="bookmark-outline"
          iconDimensions={{ width: 20, height: 20 }}
        />
      </Pressable>
      <ImageCarousel images={images} />
    </View>
  );
}
