import React from "react";
import styled from "styled-components";
import {Link, useMatch} from "react-router-dom";

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const shouldForwardProp = (prop) => !["isActive"].includes(prop);

const Text = styled.div.withConfig({shouldForwardProp})`
${(props) => props.theme.fonts.arialBlack24_5}
  display: flex;
  color: ${(props) =>
    props.isActive ? props.theme.colors.darkBlue : props.theme.colors.veryLightBlue};
  text-align: center;
`;

const NavItem = ({to, children}) => {
  const isActive = useMatch({path: to, end: true});

  return (
    <StyledLink to={to}>
      <Text isActive={isActive}>{children}</Text>
    </StyledLink>
  );
};

export default NavItem;
