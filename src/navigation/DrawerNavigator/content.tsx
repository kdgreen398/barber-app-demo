import { DrawerContentComponentProps } from "@react-navigation/drawer";
import {
  Drawer,
  DrawerItem,
  Icon,
  IndexPath,
  Layout,
  Text,
  TextElement,
} from "@ui-kitten/components";
import LogoButton from "../../components/LogoButton";
import { generateSpacing } from "../../util/spacing-util";

export default function DrawerContent({
  navigation,
  state,
}: DrawerContentComponentProps) {
  return (
    <Layout
      style={{
        flex: 1,
        gap: generateSpacing(2),
        paddingTop: generateSpacing(2),
      }}
    >
      <LogoButton disabled />
      <Drawer
        selectedIndex={new IndexPath(state.index)}
        onSelect={(index) => navigation.navigate(state.routeNames[index.row])}
      >
        <DrawerItem
          title={() => <Title text="Search" />}
          accessoryLeft={(props) => <Icon {...props} name="search-outline" />}
        />
        <DrawerItem
          title={() => <Title text="Log In" />}
          accessoryLeft={(props) => <Icon {...props} name="person-outline" />}
        />
        <DrawerItem
          title={() => <Title text="Sign Up" />}
          accessoryLeft={(props) => (
            <Icon {...props} name="person-add-outline" />
          )}
        />
      </Drawer>
    </Layout>
  );
}

const Title = (props: { text: string }): TextElement => (
  <Text
    style={{
      fontFamily: "LeagueSpartan_400Regular",
      fontSize: 16,
      paddingLeft: generateSpacing(1),
      width: "100%",
    }}
  >
    {props.text}
  </Text>
);
