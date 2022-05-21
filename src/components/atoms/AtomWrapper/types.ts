import { ReactNativeStyle } from "@emotion/native";
import type { ViewProps } from "react-native";
export type AtomWrapperStyle = {
  color?: string;
  backgroundColor?: string;
  borderRadius?: string;
  border?: string;
  width?: string;
  padding?: string;
  margin?: string;
  height?: string;
  alignItems?: "center" | "flex-start" | "flex-end";
  justifyContent?:
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-between"
    | "space-around"
    | "space-evenly";
  customCSS?: ReactNativeStyle;
};

export type AtomWrapperProps = ViewProps & AtomWrapperStyle;
