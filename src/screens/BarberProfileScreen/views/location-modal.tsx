import { Icon, Text, useTheme } from "@ui-kitten/components";
import { View } from "react-native";
import Modal from "../../../components/Modal";
import { generateSpacing } from "../../../util/spacing-util";
import { BUSINESS_HOURS } from "../constant";

export default function LocationModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const theme = useTheme();
  return (
    <Modal
      title="Location Details"
      isVisible={isOpen}
      onDismiss={onClose}
      buttons={[
        {
          status: "basic",
          text: "2615 Memorial Drive, Nashville, TN 35834",
          icon: "copy-outline",
          onClick: () => null,
        },
        {
          status: "primary",
          text: "Open In Maps",
          onClick: () => null,
        },
      ]}
    >
      <View style={{ paddingLeft: 10, paddingRight: 10 }}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: generateSpacing(1),
          }}
        >
          <Icon
            name="clock-outline"
            style={{ width: 20, height: 20 }}
            fill={theme["color-basic-100"]}
          />
          <Text
            category="p1"
            style={{ fontFamily: "LeagueSpartan_400Regular", fontSize: 16 }}
          >
            Hours of Operation
          </Text>
        </View>
        <View
          style={{
            marginLeft: 20 + generateSpacing(1),
            gap: generateSpacing(0.5),
          }}
        >
          {BUSINESS_HOURS.map(
            ({ startTime, endTime, day, isClosed }, index) => (
              <View
                key={index + day + isClosed}
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Text category="p1" style={{ color: theme["color-basic-200"] }}>
                  {day}
                </Text>
                {isClosed ? (
                  <Text
                    category="p1"
                    style={{ color: theme["color-basic-200"] }}
                  >
                    Closed
                  </Text>
                ) : (
                  <Text
                    category="p1"
                    style={{ color: theme["color-basic-200"] }}
                  >
                    {startTime as string} - {endTime as string}
                  </Text>
                )}
              </View>
            ),
          )}
        </View>
      </View>
    </Modal>
  );
}
