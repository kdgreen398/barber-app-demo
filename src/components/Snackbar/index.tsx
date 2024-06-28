import { Icon, useStyleSheet, useTheme } from "@ui-kitten/components";
import React, { useEffect, useState } from "react";
import { Animated } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { generateSpacing } from "../../util/spacing-util";
import TextButton from "../TextButton";
import { styles as themedStyles } from "./styles";
import { SnackbarProps } from "./types";

export default function Snackbar({
  message,
  visible,
  status = "basic",
  duration = 50000,
  onDismiss,
}: SnackbarProps) {
  const styles = useStyleSheet(themedStyles);
  const theme = useTheme();
  const insets = useSafeAreaInsets();
  const [show, setShow] = useState(visible);
  const fadeAnim = useState(new Animated.Value(0))[0];

  useEffect(() => {
    if (visible) {
      setShow(true);
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 250,
        useNativeDriver: true,
      }).start();

      const timer = setTimeout(() => {
        Animated.timing(fadeAnim, {
          toValue: 0,
          duration: 500,
          useNativeDriver: true,
        }).start(() => {
          setShow(false);
          if (onDismiss) {
            onDismiss();
          }
        });
      }, duration);

      return () => clearTimeout(timer);
    }
  }, [visible, duration, fadeAnim, onDismiss]);

  if (!show) {
    return null;
  }

  return (
    <Animated.View
      style={[
        styles.snackbar,
        {
          opacity: fadeAnim,
          transform: [
            {
              translateY: fadeAnim.interpolate({
                inputRange: [0, 1],
                outputRange: [100, 0],
              }),
            },
          ],
          bottom: insets.bottom || generateSpacing(2),
        },
      ]}
    >
      <TextButton
        style={styles.button}
        fontFamily="LibreFranklin_600SemiBold"
        accessoryLeft={(props) => (
          <Icon
            {...props}
            fill={theme["color-basic-100"]}
            name={status === "danger" ? "alert-circle-outline" : "info-outline"}
          />
        )}
        onPress={() => {
          Animated.timing(fadeAnim, {
            toValue: 0,
            duration: 500,
            useNativeDriver: true,
          }).start(() => {
            setShow(false);
            if (onDismiss) {
              onDismiss();
            }
          });
        }}
      >
        {message}
      </TextButton>
    </Animated.View>
  );
}
