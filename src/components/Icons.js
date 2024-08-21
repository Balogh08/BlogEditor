import styled from "styled-components";
import {colors} from "../styles/colors";

const shouldForwardProp = (prop) => !["hoverColor"].includes(prop);

const IconWrapper = styled.div.withConfig({shouldForwardProp})`
  &:hover {
    cursor: pointer;
    svg path {
      fill: ${(props) => props.hoverColor};
      transition: fill 0.2s ease;
    }
  }
`;


export const LogIn = ({onClick}) => {
  return (
    <IconWrapper onClick={onClick} hoverColor={colors.darkBlue}>
      <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M22.9167 14.5833L20 17.5L25.4167 22.9167H4.16669V27.0833H25.4167L20 32.5L22.9167 35.4167L33.3334 25L22.9167 14.5833ZM41.6667 39.5833H25V43.75H41.6667C43.9584 43.75 45.8334 41.875 45.8334 39.5833V10.4167C45.8334 8.125 43.9584 6.25 41.6667 6.25H25V10.4167H41.6667V39.5833Z"
          fill={colors.lightBlue}/>
      </svg>
    </IconWrapper>
  );
};

export const LogOut = ({onClick}) => {
  return (
    <IconWrapper onClick={onClick} hoverColor={colors.darkRed}>
      <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M27.0833 35.4167L29.9999 32.5L24.5833 27.0833L45.8333 27.0833V22.9167L24.5833 22.9167L29.9999 17.5L27.0833 14.5833L16.6666 25L27.0833 35.4167ZM8.33325 10.4167L24.9999 10.4167V6.25L8.33325 6.25C6.04158 6.25 4.16658 8.125 4.16658 10.4167L4.16658 39.5833C4.16658 41.875 6.04158 43.75 8.33325 43.75L24.9999 43.75V39.5833L8.33325 39.5833L8.33325 10.4167Z"
          fill={colors.lightRed}/>
      </svg>
    </IconWrapper>
  );
};

export const EyeClosed = () => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd" clipRule="evenodd" d="M2.71 4.54039C2.32 4.15039 2.32 3.52039 2.71 3.13039C3.1 2.74039 3.74 2.74039 4.13 3.13039L20.44 19.4604C20.83 19.8504 20.83 20.4804 20.44 20.8704C20.05 21.2604 19.42 21.2604 19.03 20.8704L16.31 18.1504C14.97 18.6704 13.52 18.9704 12 18.9704C7 18.9704 2.73 15.8604 1 11.4704C1.77 9.50039 3.06 7.80039 4.68 6.51039L2.71 4.54039ZM17 11.4704C17 8.71039 14.76 6.47039 12 6.47039C11.49 6.47039 11 6.57039 10.53 6.71039L8.36 4.54039C9.51 4.17039 10.73 3.97039 12 3.97039C17 3.97039 21.27 7.08039 23 11.4604C22.31 13.2204 21.21 14.7604 19.82 15.9904L16.76 12.9304C16.9 12.4704 17 11.9804 17 11.4704ZM12 16.4704C9.24 16.4704 7 14.2304 7 11.4704C7 10.7004 7.18 9.97039 7.49 9.33039L9.06 10.9004C9.03 11.0804 9 11.2704 9 11.4704C9 13.1304 10.34 14.4704 12 14.4704C12.2 14.4704 12.38 14.4404 12.57 14.4004L14.14 15.9704C13.49 16.2904 12.77 16.4704 12 16.4704ZM14.97 11.1404C14.82 9.74039 13.72 8.65039 12.33 8.50039L14.97 11.1404Z"
        fill={colors.lightGrey}
      />
    </svg>
  );
};

export const EyeOpened = () => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd" clipRule="evenodd" d="M12 4.5C7 4.5 2.73 7.61 1 12C2.73 16.39 7 19.5 12 19.5C17 19.5 21.27 16.39 23 12C21.27 7.61 17 4.5 12 4.5ZM12 17C9.24 17 7 14.76 7 12C7 9.24 9.24 7 12 7C14.76 7 17 9.24 17 12C17 14.76 14.76 17 12 17ZM9 12C9 10.34 10.34 9 12 9C13.66 9 15 10.34 15 12C15 13.66 13.66 15 12 15C10.34 15 9 13.66 9 12Z"
        fill={colors.lightGrey}
      />
    </svg>

  );
};

export const SettingsDots = () => {
  return (
    <svg width="13" height="23" viewBox="0 0 13 23" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="6.5" cy="2.5" r="2.45" fill="#C0C0C0" stroke="#544F4F" strokeWidth="0.1"/>
      <circle cx="6.5" cy="11.5" r="2.45" fill="#C0C0C0" stroke="#544F4F" strokeWidth="0.1"/>
      <circle cx="6.5" cy="20.5" r="2.45" fill="#C0C0C0" stroke="#544F4F" strokeWidth="0.1"/>
    </svg>
  );
};
