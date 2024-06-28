import { useEffect } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useDispatch, useSelector } from "react-redux";
import { fetchServerStatus } from "../../api/server-status";
import AuthenticationModal from "../../components/AuthenticationModal";
import LoadingPopup from "../../components/LoadingPopup";
import DrawerNavigator from "../../navigation/DrawerNavigator";
import { RootState } from "../../store";
import { AppActions } from "../../store/slices/app";

export default function AppContainer() {
  const { isLoading, isAuthenticationModalOpen } = useSelector(
    (state: RootState) => state.app,
  );
  const dispatch = useDispatch();

  useEffect(() => {
    fetchServerStatus().catch(() => {
      dispatch(
        AppActions.setSnackbar({
          message:
            "Server is not available at the moment. Please try again later.",
          visible: true,
          duration: 50000,
        }),
      );
    });
  }, []);

  return (
    <SafeAreaProvider>
      <DrawerNavigator />

      <LoadingPopup isVisible={isLoading} />
      <AuthenticationModal isOpen={isAuthenticationModalOpen} />
    </SafeAreaProvider>
  );
}
