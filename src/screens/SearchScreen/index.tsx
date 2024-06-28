import React, { useState } from "react";

import { Divider, Icon, Input, Layout, Text } from "@ui-kitten/components";
import { FlatList, Keyboard, ScrollView, View } from "react-native";
import { useSelector } from "react-redux";
import theme from "../../../theme";
import BarberCard from "../../components/BarberCard";
import { BarberCardProps } from "../../components/BarberCard/types";
import IconButton from "../../components/IconButton";
import LocationAccessButton from "../../components/LocationAccessButton";
import LocationCard from "../../components/LocationCard";
import TextButton from "../../components/TextButton";
import { WebViewStyle } from "../../shared/styles";
import { LocationObject } from "../../shared/types";
import { RootState } from "../../store";
import { STATES } from "../../util/constants";
import { generateSpacing } from "../../util/spacing-util";
import { barberCardTestData } from "./constant";
import { styles } from "./styles";
import { getPossibleCityMatches } from "./util";

export default function SearchScreen() {
  const { availableCities } = useSelector((state: RootState) => state.search);

  const flatListRef = React.useRef<FlatList>(null);

  const [searchLocation, setSearchLocation] = useState<string>("");
  const [isSearchInputFocused, setIsSearchInputFocused] = useState(false);
  const [isDeniedMessageVisible, setIsDeniedMessageVisible] = useState(false);
  const [searchResults, setSearchResults] = useState([] as BarberCardProps[]);

  const locationSearchMatches = getPossibleCityMatches(
    searchLocation,
    availableCities,
  );

  const onLocationAccessGranted = (location: LocationObject) => {
    setIsDeniedMessageVisible(false);
    setSearchLocation(location.city + ", " + location.state);
  };

  const onLocationCardPress = (locationObject: {
    city: string;
    state: string;
  }) => {
    Keyboard.dismiss();
    setSearchLocation(`${locationObject.city}, ${locationObject.state}`);
    setSearchResults(barberCardTestData);
  };

  return (
    <Layout style={[{ flex: 1 }, WebViewStyle]}>
      <View style={styles.container}>
        <View style={styles.searchContainer}>
          <View style={styles.searchRow}>
            <Input
              status="basic"
              placeholder="Location"
              size="large"
              style={styles.searchInput}
              onFocus={() => setIsSearchInputFocused(true)}
              onBlur={() => setIsSearchInputFocused(false)}
              value={searchLocation}
              onChangeText={(value) => setSearchLocation(value)}
              returnKeyType="search"
            />
            <LocationAccessButton
              style={styles.searchIconButton}
              onAccessGranted={onLocationAccessGranted}
              onAccessDenied={() => setIsDeniedMessageVisible(true)}
            />
          </View>

          {isDeniedMessageVisible && (
            <TextButton
              onPress={() => setIsDeniedMessageVisible(false)}
              style={styles.locationDeniedButton}
              size="large"
              fontFamily="LibreFranklin_400Regular"
              fontSize={14}
              accessoryLeft={() => (
                <Icon
                  name="alert-circle-outline"
                  style={{ width: 30, height: 30 }}
                  fill={theme["color-basic-200"]}
                />
              )}
            >
              You can enable location services in your system settings
            </TextButton>
          )}
        </View>
        {(isSearchInputFocused || searchResults.length === 0) &&
        searchLocation ? (
          <ScrollView
            contentContainerStyle={styles.recentSection}
            showsVerticalScrollIndicator={false}
          >
            <Text category="h6">Locations</Text>
            {renderLocationContent(locationSearchMatches, onLocationCardPress)}
          </ScrollView>
        ) : null}
      </View>
      {isSearchInputFocused === false && searchResults.length ? (
        <FlatList
          ref={flatListRef}
          data={searchResults}
          style={{ marginBottom: generateSpacing(5) }}
          renderItem={barberCardRenderItem}
          ItemSeparatorComponent={Divider}
          keyExtractor={(_, index) => index.toString()}
          showsVerticalScrollIndicator={false}
          ListFooterComponent={
            <View style={{ alignItems: "center" }}>
              <Divider />
              <IconButton
                icon="arrow-upward-outline"
                iconDimensions={{ width: 24, height: 24 }}
                onPress={() => flatListRef.current?.scrollToIndex({ index: 0 })}
                caption="Scroll to top"
              />
            </View>
          }
        />
      ) : null}
    </Layout>
  );
}

const renderLocationContent = (
  locations: { city: string; state: string }[],
  onPress: (x: { city: string; state: string }) => void,
) => {
  return locations.length ? (
    locations.map(({ city, state }, index) => (
      <LocationCard
        key={city + state + index}
        city={city}
        state={STATES.find((obj) => obj.shorthand === state)?.name as string}
        onPress={() => onPress({ city, state })}
      />
    ))
  ) : (
    <View style={styles.noLocationContainer}>
      <Icon
        name="info-outline"
        style={{ width: 30, height: 30 }}
        fill={theme["color-basic-200"]}
      />
      <Text>Looks like we don't have any barbers in this area</Text>
    </View>
  );
};

const barberCardRenderItem = (props: { item: BarberCardProps }) => {
  const item: BarberCardProps = props.item;

  return (
    <BarberCard
      firstName={item.firstName}
      lastName={item.lastName}
      averageRating={item.averageRating}
      totalReviews={item.totalReviews}
      shop={item.shop}
      profileImage={item.profileImage}
      headerImage={item.headerImage}
      images={item.images}
      alias={item.alias}
    />
  );
};
