import React, {useState, useEffect} from "react";
import styled from "styled-components";

const MainContaier = styled.div`
${(props) => props.theme.fonts.arialRegular16}
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 0;
  width: 100%;
  background: rgba(15, 15, 15, 0.95);
  color: ${(props) => props.theme.colors.white};
  padding: 20px;
  box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.8);
  transition: all 1s ease-in-out;
  border-top: 1px solid #000;
`;

const ConsentContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 40px;
  max-width: 1200px;
  z-index: 99999;
  margin: 0 40px;
`;

const ConsentButton = styled.button`
  cursor: pointer;
  padding: 7px 30px;
  color: white;
  font-weight: bold;
  font-size: 15px;
  color: #000;
  border: 1px solid #000;
  border-radius: 5px;
  transition: all 300ms ease-in-out;
  background: -webkit-linear-gradient(#87c7de, #3842d6);

  &:hover {
    background: -webkit-linear-gradient(#edb92d, #fe6a4a);
  }
`;

const InfoLink = styled.a`
  color: #31A8F0;
  text-decoration: none;
  cursor: pointer;
`;

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "true");
    setIsVisible(false);
  };

  return (
    isVisible && (
      <MainContaier>
        <ConsentContainer>
          <div>
          Ez a weboldal cookie-kat használ annak érdekében,
          hogy a lehető legjobb felhasználói élményt nyújtsa.
            <InfoLink href="/files/cookie-policy.pdf" target="_blank">
            További információk
            </InfoLink>
          </div>
          <ConsentButton onClick={handleAccept}>Elfogadom</ConsentButton>
        </ConsentContainer>
      </MainContaier>
    )
  );
};

export default CookieConsent;
