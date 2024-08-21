import React from "react";
import styled from "styled-components";
import {StyledError} from "./StyledError";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const InputWrapper = styled.div`
position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const StyledInput = styled.input`
${(props) => props.theme.fonts.arialRegular16}
  color: ${(props) => props.theme.colors.darkGrey};
  width: 400px;
  height: 50px;
  border: 1px solid ${(props) => props.theme.colors.darkGrey};
  border-radius: 12px;
  padding: 16px 24px;
  background-color: ${(props) => props.theme.colors.white};

  &::placeholder {
    color: rgba(139, 139, 139, 0.6);
  }

  &:focus {
    outline: none;
    border-color: ${(props) => props.theme.colors.lightBlue};
  }
`;

const Label = styled.label`
${(props) => props.theme.fonts.arialRegular16}
  margin-bottom: 8px;
  font-size: 16px;
  color: #333;
`;

const InputField = React.forwardRef(({label, type = "text", errorMessage, placeholder, ...props}, ref) => {
  return (
    <Container>
      <InputWrapper>
        {label && <Label>{label}</Label>}
        <StyledInput type={type} placeholder={placeholder} {...props} />
      </InputWrapper>

      {errorMessage && <StyledError>{errorMessage}</StyledError>}
    </Container>
  );
});

export default InputField;
