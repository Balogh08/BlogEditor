import {useEffect, useState} from "react";
import styled, {css} from "styled-components";
import {MultipleShadowsSpinner} from "../features/Loading/components/Loaders";

const shouldForwardProp = (prop) => !["variant"].includes(prop);

const StyledButton = styled.button.withConfig({shouldForwardProp})`
display: inline-flex;
justify-content: center;
align-items: center;
gap: 10px;
color: ${(props) => props.theme.colors.white};
font-family: ${(props) => props.theme.fonts.arialBold17_8.fontFamily};
font-size: ${(props) => props.theme.fonts.arialBold17_8.fontSize};
letter-spacing: ${(props) => props.theme.fonts.arialBold17_8.letterSpacing};
font-weight: ${(props) => props.theme.fonts.arialBold17_8.fontWeight};
line-height: ${(props) => props.theme.fonts.arialBold17_8.fontSize};
border: 0px;
height: 44px;
padding: 12px 20px;
border-radius: 22px;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
transition: background-color 200ms;
text-transform: uppercase;

${(props) =>
    props.variant === "cancel" &&
  css`
    background-color: ${props.theme.colors.lightGrey};
    &:hover {
      background-color: ${props.theme.colors.darkGrey};
    }
  `}

${(props) =>
    props.variant === "warning" &&
  css`
    background-color: ${props.theme.colors.lightRed};
    &:hover {
      background-color: ${props.theme.colors.darkRed};
    }
  `}

${(props) =>
    (props.variant === "default" || !props.variant) &&
  css`
    background-color: ${props.theme.colors.lightGreen};
    &:hover {
      background-color: ${props.theme.colors.darkGreen};
    }
  `}
`;

const Button = ({children, onClick,
  loading = false, variant = "default"}) => {
  const [isLoading, setLoading] = useState(false);

  const handleClick = async (e) => {
    if (!isLoading) {
      setLoading(true);
      if (onClick) {
        await onClick(e);
      }
      setLoading(false);
    }
  };

  // Manage button loading state outside in case of form submission
  useEffect(() => {
    setLoading(loading);
  }, [loading]);

  return (
    <StyledButton
      onClick={handleClick}
      variant={variant}
      disabled={isLoading}>
      {children}
      {isLoading && <MultipleShadowsSpinner /> }
    </StyledButton>
  );
};

export default Button;

const StyledSmallButton = styled.button`
color: ${(props) => props.theme.colors.white};
font-family: ${(props) => props.theme.fonts.arialRegular17_5.fontFamily};
font-size: ${(props) => props.theme.fonts.arialRegular17_5.fontSize};
letter-spacing: ${(props) => props.theme.fonts.arialRegular17_5.letterSpacing};
font-weight: ${(props) => props.theme.fonts.arialRegular17_5.fontWeight};
line-height: ${(props) => props.theme.fonts.arialRegular17_5.fontSize};
background-color: ${(props) => props.theme.colors.lightGreen};
border: 0px;
height: 36px;
padding: 8px 20px;
border-radius: 20px;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
transition: background-color 200ms;

&:hover {
  background-color: ${(props) => props.theme.colors.darkGreen};;
}
`;

export const SmallButton = ({children, onClick}) => {
  return (
    <StyledSmallButton onClick={onClick}>
      {children}
    </StyledSmallButton>
  );
};
