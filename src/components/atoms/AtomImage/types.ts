import { ReactNativeStyle } from "@emotion/native";
import type { ImageProps } from "react-native";
export type AtomImageType = {
  customBorderRadius?: string;
  customWidth?: string;
  customPadding?: string;
  customHeight?: string;
  customBorder?: string;
  customMargin?: string;
  customCSS?: ReactNativeStyle;
};

export type AtomImageProps = ImageProps &
  AtomImageType & {
    url: string;
    source?: ImageProps["source"];
  };
