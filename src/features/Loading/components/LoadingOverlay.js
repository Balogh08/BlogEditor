import styled from "styled-components";
import {EatLoader} from "./Loaders";

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(128, 128, 128, 0.7); // gray background with some transparency
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999; // high z-index to cover everything
`;

const LoadingOverlay = ({children}) => {
  return (
    <Overlay>
      {children ? children : <EatLoader/>}
    </Overlay>
  );
};

export default LoadingOverlay;
