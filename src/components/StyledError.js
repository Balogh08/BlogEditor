import styled from "styled-components";

export const StyledError = styled.p`
${(props) => props.theme.fonts.arialBold12}
  color: ${(props) => props.theme.colors.lightRed};
  margin: auto 0 auto 10px;
`;
