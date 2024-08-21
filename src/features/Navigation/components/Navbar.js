import React, {useContext, useState} from "react";
import styled from "styled-components";
import NavItem from "./NavItem";
import {LogIn, LogOut} from "../../../components/Icons";
import Modal from "../../../components/Modal";
import LoginForm from "../../Auth/components/Login";
import LogoutForm from "../../Auth/components/Logout";
import {AuthContext} from "../../Auth/stores/AuthContext";

const NavBarWrapper = styled.div`
  width: 100%;
  position: fixed;
  top: 0;
  background-color: ${(props) => props.theme.colors.white};
  z-index: 1000;
  border-bottom: 8px solid ${(props) => props.theme.colors.lightBlue};
`;

const NavBarContainer = styled.div`
  width: 100%;
  height: 98px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 24px 32px;
  margin: 0 auto;
  gap: 32px;
`;


const NavBar = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const {currentUser} = useContext(AuthContext);

  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);
  return (
    <NavBarWrapper>
      <NavBarContainer>
        <NavItem to="/">FŐOLDAL</NavItem>
        <NavItem to="/sponsors">TÁMOGATÓINK</NavItem>
        <NavItem to="/events">ESEMÉNYEK</NavItem>
        {currentUser ?
        <LogOut onClick={openModal}/> :
        <LogIn onClick={openModal}/>
        }
      </NavBarContainer>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        title={currentUser ? "" : "Üdvözöljük!"}>
        {currentUser ?
        <LogoutForm onCancel={closeModal}/> :
         <LoginForm onCancel={closeModal}/>}
      </Modal>
    </NavBarWrapper>
  );
};

export default NavBar;
