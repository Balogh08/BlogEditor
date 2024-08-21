import styled from "styled-components";

export const DefaultContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 16px;
  margin-bottom: 32px;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
`;

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  margin: 80px 72px;
  max-width: 1440px;

  @media (max-width: 580px) {
    margin: 32px 24px;
  }
`;

export const DescriptionContainer = styled.span`
  ${(props) => props.theme.fonts.arialBold24_5};
  display: block;
  margin: 0 auto 68px;
  text-align: center;
`;
