import styled, { css } from "@emotion/native";
import { AtomWrapperStyle } from "../AtomWrapper/types";

export const ContainerStyle = styled.View<AtomWrapperStyle>(
  (props) => css`
    flex: 1;
    display: flex;
    justify-content: ${props?.justifyContent ?? "flex-start"};
    align-items: ${props?.alignItems ?? "flex-start"};
    background-color: ${props?.backgroundColor ?? "transparent"};
    border-radius: ${props?.borderRadius ?? 0};
    width: ${props?.width ?? "100%"};
    height: ${props?.height ?? "100%"};
    padding: ${props?.padding ?? 0};
    margin: ${props?.margin ?? 0};
    border: ${props?.border ?? "none"};
    ${props?.customCSS}
  `
);
