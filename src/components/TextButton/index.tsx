import { Button, Text } from "@ui-kitten/components";
import { TextButtonProps } from "./types";

export default function TextButton(props: TextButtonProps) {
  return (
    <Button {...props} status={props.status || "basic"}>
      <Text>
        <Text
          category="p1"
          style={{
            fontSize: props.fontSize || 16,
            fontFamily: props.fontFamily || "LeagueSpartan_600SemiBold",
          }}
        >
          {props.children}
        </Text>
      </Text>
    </Button>
  );
}
