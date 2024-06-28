import { ButtonProps } from "@ui-kitten/components";

export interface TextButtonProps extends ButtonProps {
  children: string;
  bold?: boolean;
  fontSize?: number;
  fontFamily?: string;
}
