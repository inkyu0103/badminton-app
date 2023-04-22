export interface IMutationConfig {
  onSuccess: () => void;
  onError?: () => void;
  onSettled?: () => void;
}
