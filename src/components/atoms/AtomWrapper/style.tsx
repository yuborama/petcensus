import styled, { css } from "@emotion/native";
import { AtomWrapperStyle } from "./types";

export const ViewStyle = styled.View<AtomWrapperStyle>(
  (props) => css`
    display: flex;
    justify-content: ${props?.justifyContent ?? "flex-start"};
    align-items: ${props?.alignItems ?? "flex-start"};
    background-color: ${props?.backgroundColor ?? "transparent"};
    border-radius: ${props?.borderRadius ?? 0};
    width: ${props?.width ?? "100%"};
    height: ${props?.height ?? "max-content"};
    padding: ${props?.padding ?? 0};
    margin: ${props?.margin ?? 0};
    border: ${props?.border ?? "none"};
    ${props?.customCSS}
  `
);
