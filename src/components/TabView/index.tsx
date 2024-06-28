import {
  Tab,
  Text,
  TabView as UIKTabView,
  useStyleSheet,
  useTheme,
} from "@ui-kitten/components";
import { View } from "react-native";
import { generateSpacing } from "../../util/spacing-util";
import { styles as themedStyles } from "./styles";
import { TabViewProps } from "./types";

export default function TabView({
  onSelect,
  selectedIndex,
  tabs,
}: TabViewProps) {
  const styles = useStyleSheet(themedStyles);
  const theme = useTheme();

  return (
    <UIKTabView
      selectedIndex={selectedIndex}
      onSelect={onSelect}
      indicatorStyle={styles.tabIndicator}
    >
      {tabs.map((tab, index) => (
        <Tab
          key={tab.title}
          title={() => {
            return (
              <Text
                style={{
                  padding: 10,
                  fontSize: 16,
                  fontFamily:
                    selectedIndex === index
                      ? "LeagueSpartan_600SemiBold"
                      : "LeagueSpartan_400Regular",
                  color:
                    selectedIndex === index
                      ? theme["color-basic-100"]
                      : theme["color-basic-200"],
                }}
              >
                {tab.title}
              </Text>
            );
          }}
        >
          <View style={{ marginTop: generateSpacing(2) }}>{tab.render()}</View>
        </Tab>
      ))}
    </UIKTabView>
  );
}
