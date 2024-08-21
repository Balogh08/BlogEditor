import React, {useState} from "react";
import styled from "styled-components";
import {EyeClosed, EyeOpened} from "./Icons";
import InputField from "./InputField";

const InputWrapper = styled.div`

position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const IconContainer = styled.div`
  position: absolute;
  right: 20px;
  cursor: pointer;
  display: flex;
  flex-direction: column;
`;

const PasswordInput = React.forwardRef((
    {label, placeholder, ...props}, ref) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <InputWrapper>
      <InputField
        label={label}
        type={isPasswordVisible ? "text" : "password"} placeholder={placeholder}
        {...props} />
      <IconContainer
        onClick={togglePasswordVisibility}
      >
        {isPasswordVisible ? <EyeOpened/> : <EyeClosed/>}
      </IconContainer>
    </InputWrapper>
  );
});

export default PasswordInput;
