import ReactModal from "react-modal";
import {colors} from "../styles/colors";
import styled from "styled-components";

const ModalTitle = styled.span`
${(props) => props.theme.fonts.arialBlack40_5};
color: ${(props) => props.theme.colors.lightBlue};
text-align: center;
margin: 0 0 48px 0;
`;

const Modal = ({isOpen, onRequestClose, title, children}) => {
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      shouldCloseOnOverlayClick={false}
      style={{
        overlay: {
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          zIndex: "1001",
        },
        content: {
          width: "466px",
          borderRadius: "8px",
          backgroundColor: colors.white,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "flexStart",
          padding: "68px 32px",
          top: "50%",
          left: "50%",
          right: "auto",
          bottom: "auto",
          marginRight: "-50%",
          transform: "translate(-50%, -50%)",
          zIndex: "1002",
          boxShadow: "-2px -2px 2px rgba(255, 255, 255, 0.4), 1px 1px 2px rgba(0, 0, 0, 0.25), 5px 5px 7px rgba(0, 0, 0, 0.25), -5px -5px 8px rgba(255, 255, 255, 0.1)",
        },
      }}
    >
      {title &&
      <ModalTitle>{title}</ModalTitle>
      }
      {children}
    </ReactModal>
  );
};

export default Modal;
