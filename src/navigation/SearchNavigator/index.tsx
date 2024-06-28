import { createStackNavigator } from "@react-navigation/stack";
import { View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import Snackbar from "../../components/Snackbar";
import StackHeader from "../../components/StackHeader";
import BarberProfileScreen from "../../screens/BarberProfileScreen";
import SearchScreen from "../../screens/SearchScreen";
import { WebViewStyle } from "../../shared/styles";
import { RootState } from "../../store";
import { AppActions } from "../../store/slices/app";
import { SCREEN_NAMES } from "../../util/screen-names";

const Stack = createStackNavigator();

export default function SearchNavigator() {
  const { snackbar } = useSelector((state: RootState) => state.app);
  const dispatch = useDispatch();
  return (
    <View style={[WebViewStyle, { flex: 1 }]}>
      <Stack.Navigator
        screenOptions={{
          animationEnabled: true,
          cardStyle: { height: "100%" },
        }}
      >
        <Stack.Screen
          name={SCREEN_NAMES.SearchScreen}
          component={SearchScreen}
          options={{
            header: () => <StackHeader showLogo showMenu />,
          }}
        />
        <Stack.Screen
          name={SCREEN_NAMES.BarberProfileScreen}
          component={BarberProfileScreen}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>

      <Snackbar
        message={snackbar?.message as string}
        visible={snackbar?.visible as boolean}
        duration={snackbar?.duration}
        onDismiss={() =>
          dispatch(AppActions.setSnackbar({ message: null, visible: false }))
        }
      />
    </View>
  );
}
