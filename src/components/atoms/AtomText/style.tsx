import styled from "@emotion/native";
import { Text } from "react-native";
import { TextStyle } from "./types";

export const TextSyle = styled(Text)<TextStyle>`
  font-size: ${({ fontSize }) => fontSize || "20px"};
  color: ${({ color }) => color || "black"};
`;
