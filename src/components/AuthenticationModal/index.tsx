import { DrawerNavigationProp } from "@react-navigation/drawer";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { RootDrawerParamList } from "../../shared/types";
import { AppActions } from "../../store/slices/app";
import LogoButton from "../LogoButton";
import Modal from "../Modal";

//TODO: after successful login, navigate to the previous screen

export default function AuthenticationModal({ isOpen }: { isOpen: boolean }) {
  const dispatch = useDispatch();
  const drawerNavigation =
    useNavigation<DrawerNavigationProp<RootDrawerParamList>>();
  const handleLogin = () => {
    dispatch(AppActions.setIsAuthenticationModalOpen(false));
    drawerNavigation.navigate("Login");
  };
  const handleSignUp = () => {
    dispatch(AppActions.setIsAuthenticationModalOpen(false));
    drawerNavigation.navigate("Signup");
  };
  return (
    <Modal
      isVisible={isOpen}
      title={() => <LogoButton disabled width={146} height={37} />}
      text="You must have an account to access this feature."
      onDismiss={() => dispatch(AppActions.setIsAuthenticationModalOpen(false))}
      buttons={[
        {
          text: "Log in",
          status: "basic",
          onClick: handleLogin,
        },
        {
          text: "Create an account",
          status: "primary",
          onClick: handleSignUp,
        },
      ]}
    />
  );
}
