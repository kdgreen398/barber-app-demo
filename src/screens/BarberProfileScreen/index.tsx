import React, { useRef, useState } from "react";

import { useNavigation, useNavigationState } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import {
  Icon,
  Layout,
  Text,
  useStyleSheet,
  useTheme,
} from "@ui-kitten/components";
import {
  Animated,
  Image,
  ImageProps,
  NativeScrollEvent,
  NativeSyntheticEvent,
  ScrollView,
  View,
} from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useDispatch } from "react-redux";
import IconButton from "../../components/IconButton";
import TabView from "../../components/TabView";
import TextButton from "../../components/TextButton";
import useGetAppDimensions from "../../shared/hooks/dimensions";
import { WebViewStyle } from "../../shared/styles";
import { RootStackParamList } from "../../shared/types";
import { AppActions } from "../../store/slices/app";
import { generateSpacing } from "../../util/spacing-util";
import {
  PROFILE_SCREEN_AVATAR_SIZE,
  PROFILE_SCREEN_HEADER_HEIGHT,
} from "./constant";
import { styles as themedStyles } from "./styles";
import { BarberProfileScreenParams } from "./types";
import LocationModal from "./views/location-modal";
import PhotoView from "./views/photo-view";
import ReviewView from "./views/review-view";
import ServiceView from "./views/service-view";

export default function BarberProfileScreen() {
  const {
    name,
    alias,
    shop,
    averageRating,
    totalReviews,
    images,
    profileImage,
    headerImage,
  } = useNavigationState(
    ({ routes, index }) =>
      (routes[index].params || {}) as BarberProfileScreenParams,
  );

  const insets = useSafeAreaInsets();
  const theme = useTheme();
  const dispatch = useDispatch();
  const styles = useStyleSheet(themedStyles);
  const { width: screenWidth } = useGetAppDimensions();
  const fadeAnim = useRef(new Animated.Value(0)).current; // Initial value for opacity: 0
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  const [isCompactHeaderVisible, setIsCompactHeaderVisible] = useState(false);
  const [isLocationModalVisible, setIsLocationModalVisible] = useState(false);
  const [selectedTabIndex, setSelectedTabIndex] = useState(0);

  const headerHeight = PROFILE_SCREEN_HEADER_HEIGHT + insets.top;

  const quickActionButtons = [
    {
      icon: "message-circle-outline",
      caption: "Message",
      onPress: () => dispatch(AppActions.setIsAuthenticationModalOpen(true)),
    },
    {
      icon: "navigation-outline",
      caption: "Location",
      onPress: () => setIsLocationModalVisible(true),
    },
    {
      icon: "info-outline",
      caption: "Info",
      onPress: () => null,
    },
    {
      icon: "share-outline",
      caption: "Share",
      onPress: () => null,
    },
  ];

  const handleOnScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const yOffset = event.nativeEvent.contentOffset.y;
    const duration = 250;

    if (yOffset > 50 && !isCompactHeaderVisible) {
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration,
        useNativeDriver: true,
      }).start();
      setIsCompactHeaderVisible(true);
    } else if (yOffset <= 25 && isCompactHeaderVisible) {
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: duration / 2,
        useNativeDriver: true,
      }).start();
      setIsCompactHeaderVisible(false);
    }
  };

  return (
    <Layout style={[styles.container, WebViewStyle]}>
      <View>
        <Image
          width={screenWidth}
          height={headerHeight}
          source={{ uri: headerImage }}
          style={{
            width: screenWidth,
            height: headerHeight,
          }}
        />
        <IconButton
          size="tiny"
          icon="chevron-left-outline"
          onPress={() => navigation.goBack()}
          appearance="filled"
          containerStyle={{
            ...styles.backButton,
            top: insets.top + generateSpacing(1),
          }}
          iconDimensions={{ width: 25, height: 25 }}
          buttonStyle={{
            width: 35,
            height: 35,
            backgroundColor: theme["color-basic-transparent-500"],
            borderWidth: 0,
          }}
        />
        <Image
          width={PROFILE_SCREEN_AVATAR_SIZE}
          height={PROFILE_SCREEN_AVATAR_SIZE}
          style={styles.avatar as ImageProps}
          source={{ uri: profileImage }}
        />
        <Animated.View
          style={[
            styles.compactHeader,
            {
              top: headerHeight + generateSpacing(1),
              opacity: fadeAnim,
            },
          ]}
        >
          <Text
            category="h4"
            numberOfLines={1}
            style={{
              fontFamily: "LeagueSpartan_600SemiBold",
              position: "relative",
              top: 1,
            }}
          >
            {alias || name || ""}
          </Text>
        </Animated.View>
      </View>
      <ScrollView
        style={styles.body}
        scrollEventThrottle={16}
        onScroll={handleOnScroll}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.bodyContent}
      >
        <View style={[styles.paddingX, styles.barberInfo]}>
          <View>
            <Text category="h4">{alias || name || ""}</Text>
            <Text category="p1" style={{ color: theme["color-basic-200"] }}>
              {shop}
            </Text>
            <View style={styles.ratingContainer}>
              <Icon
                name="star"
                style={{ width: 16, height: 16 }}
                fill={theme["color-warning-500"]}
              />
              <Text category="p1">
                {averageRating && averageRating.toFixed(1)}
              </Text>
              <Text category="p1" style={{ color: theme["color-basic-200"] }}>
                ({totalReviews})
              </Text>
            </View>
          </View>
          <IconButton
            icon="bookmark-outline"
            appearance="ghost"
            containerStyle={{ marginLeft: "auto" }}
            iconDimensions={{ width: 20, height: 20 }}
            onPress={() =>
              dispatch(AppActions.setIsAuthenticationModalOpen(true))
            }
          />
        </View>
        <Text category="p1" style={[styles.paddingX, styles.bio]}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc dictum
          risus sit amet malesuada cursus.
        </Text>
        <ScrollView
          horizontal
          contentContainerStyle={{
            padding: generateSpacing(2),
            gap: generateSpacing(1),
          }}
        >
          {quickActionButtons.map(({ icon, caption, onPress }, index) => (
            <IconButton
              size="small"
              type="rectangle"
              appearance="filled"
              key={icon + index}
              icon={icon}
              onPress={onPress}
              caption={caption}
              buttonStyle={styles.quickActionButton}
              iconDimensions={{ width: 20, height: 20 }}
            />
          ))}
        </ScrollView>
        <View style={[styles.paddingX, { gap: generateSpacing(2) }]}>
          <TextButton
            bold
            fontSize={14}
            size="medium"
            status="primary"
            onPress={() =>
              dispatch(AppActions.setIsAuthenticationModalOpen(true))
            }
          >
            Book Now
          </TextButton>
          <TabView
            selectedIndex={selectedTabIndex}
            onSelect={(index) => setSelectedTabIndex(index)}
            tabs={[
              {
                title: "Photos",
                render: () => <PhotoView images={images || []} />,
              },
              {
                title: "Services",
                render: () => <ServiceView />,
              },
              {
                title: "Reviews",
                render: () => <ReviewView />,
              },
            ]}
          />
        </View>
      </ScrollView>

      <LocationModal
        isOpen={isLocationModalVisible}
        onClose={() => setIsLocationModalVisible(false)}
      />
    </Layout>
  );
}
