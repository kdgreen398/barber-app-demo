import {
  Icon,
  Layout,
  Text,
  Modal as UIKModal,
  useTheme,
} from "@ui-kitten/components";
import React, { ReactElement } from "react";
import { View } from "react-native";
import { generateSpacing } from "../../util/spacing-util";
import TextButton from "../TextButton";
import { ModalProps } from "./types";

export default function Modal({
  buttons,
  isVisible,
  children,
  onDismiss,
  text,
  title,
}: ModalProps) {
  const theme = useTheme();
  const hideModal = () => {
    if (onDismiss) onDismiss();
  };

  return (
    <UIKModal
      visible={isVisible}
      backdropStyle={{ backgroundColor: theme["color-basic-transparent-600"] }}
      onBackdropPress={hideModal}
    >
      <Layout
        level="2"
        style={{ padding: 20, margin: 20, borderRadius: 5, gap: 15 }}
      >
        {title && typeof title === "string" ? (
          <Text category="h5">{title}</Text>
        ) : (
          (title as () => ReactElement)()
        )}
        {text && (
          <Text category="p1" style={{ color: theme["color-basic-200"] }}>
            {text}
          </Text>
        )}
        {children}
        <View
          style={{
            gap: generateSpacing(1),
            alignSelf: "stretch",
          }}
        >
          {buttons.map((button, index) => {
            return (
              <TextButton
                key={index}
                fontSize={button.status !== "primary" ? 14 : 16}
                fontFamily={
                  button.status !== "primary"
                    ? "LibreFranklin_400Regular"
                    : "LeagueSpartan_600SemiBold"
                }
                onPress={button.onClick}
                status={button.status}
                accessoryLeft={
                  button.icon
                    ? () => (
                        <Icon
                          name={button.icon}
                          style={{ width: 20, height: 20 }}
                          fill={theme["color-basic-100"]}
                        />
                      )
                    : undefined
                }
              >
                {button.text}
              </TextButton>
            );
          })}
        </View>
      </Layout>
    </UIKModal>
  );
}
