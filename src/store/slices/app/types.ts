export interface AppState {
  snackbar: SnackbarType;
  isLoading: boolean;
  isAuthenticationModalOpen: boolean;
}

export type SnackbarType = {
  message?: string | null;
  visible?: boolean;
  duration?: number;
};
