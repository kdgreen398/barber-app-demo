export type SnackbarProps = {
  message: string;
  visible: boolean;
  status?: "danger" | "success" | "basic";
  duration?: number;
  onDismiss?: () => void;
};
