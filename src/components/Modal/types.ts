import { ReactElement } from "react";

export interface ModalProps {
  isVisible: boolean;
  title?: string | (() => ReactElement);
  text?: string;
  buttons: Array<{
    text: string;
    onClick: () => void;
    status?: "primary" | "basic";
    icon?: string;
  }>;
  onDismiss?: () => void;
  children?: React.ReactNode;
  icon?: string;
}
