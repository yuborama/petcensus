import { AtomWrapperProps } from "./types";
import styled from "@emotion/native";
import { ViewPropTypes } from "react-native";
import { FC } from "react";
import { ViewStyle } from "./style";

const AtomWrapper: FC<AtomWrapperProps> = (props) => {
  const { children } = props;
  return <ViewStyle {...props}>{children}</ViewStyle>;
};

export default AtomWrapper;
