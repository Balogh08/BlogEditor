import styled, {keyframes} from "styled-components";

const eatAnimation = keyframes`
  0% , 49% { border-right-color: ${(props) => props.theme.colors.white} }
  50% , 100% { border-right-color: transparent }
`;

const moveAnimation = keyframes`
  0% { left: 75px ; opacity: 1}
  50% { left: 0px; opacity: 1 }
  52%, 100% { left: -5px; opacity: 0; }
`;

const Loader = styled.span`
  position: relative;
  border: 24px solid ${(props) => props.theme.colors.blue800};
  border-radius: 50%;
  box-sizing: border-box;
  animation: ${eatAnimation} 1s linear infinite;
  &:after, &:before {
    content: '';
    position: absolute;
    left: 50px;
    top: 50%;
    transform: translateY(-50%);
    background: ${(props) => props.theme.colors.green800};
    width: 15px;
    height: 15px;
    border-radius: 50%;
    box-sizing: border-box;
    opacity: 0;
    animation: ${moveAnimation} 2s linear infinite;
  }
  &:before {
    animation-delay: 1s;
  }
`;

export const EatLoader = () => (<Loader/>);

const moveAnimation2 = keyframes`
  0%, 5% {
    left: -32px;
    width: 16px;
  }
  15%, 20% {
    left: -32px;
    width: 48px;
  }
  30%, 35% {
    left: 0px;
    width: 16px;
  }
  45%, 50% {
    left: 0px;
    width: 48px;
  }
  60%, 65% {
    left: 32px;
    width: 16px;
  }
  75%, 80% {
    left: 32px;
    width: 48px;
  }
  95%, 100% {
    left: 64px;
    width: 16px;
  }
`;

const Loader2 = styled.span`
  width: 16px;
  height: 16px;
  position: relative;
  left: -32px;
  border-radius: 50%;
  color: ${(props) => props.theme.colors.white};
  background: currentColor;
  box-shadow: 32px 0 , -32px 0 ,  64px 0;
  &:after {
    content: '';
    position: absolute;
    left: -32px;
    top: 0;
    width: 16px;
    height: 16px;
    border-radius: 10px;
    background: ${(props) => props.theme.colors.blueLight};
    animation: ${moveAnimation2} 3s linear infinite alternate;
  }
`;

export const DotsLoader = () => (<Loader2/>);

const mulShdSpin = keyframes`
  0%, 100% {
    box-shadow: 0 -3em 0 0.2em, 
    2em -2em 0 0em, 3em 0 0 -1em, 
    2em 2em 0 -1em, 0 3em 0 -1em, 
    -2em 2em 0 -1em, -3em 0 0 -1em, 
    -2em -2em 0 0;
  }
  12.5% {
    box-shadow: 0 -3em 0 0, 2em -2em 0 0.2em, 
    3em 0 0 0, 2em 2em 0 -1em, 0 3em 0 -1em, 
    -2em 2em 0 -1em, -3em 0 0 -1em, 
    -2em -2em 0 -1em;
  }
  25% {
    box-shadow: 0 -3em 0 -0.5em, 
    2em -2em 0 0, 3em 0 0 0.2em, 
    2em 2em 0 0, 0 3em 0 -1em, 
    -2em 2em 0 -1em, -3em 0 0 -1em, 
    -2em -2em 0 -1em;
  }
  37.5% {
    box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em,
     3em 0em 0 0, 2em 2em 0 0.2em, 0 3em 0 0em, 
     -2em 2em 0 -1em, -3em 0em 0 -1em, -2em -2em 0 -1em;
  }
  50% {
    box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em,
     3em 0 0 -1em, 2em 2em 0 0em, 0 3em 0 0.2em, 
     -2em 2em 0 0, -3em 0em 0 -1em, -2em -2em 0 -1em;
  }
  62.5% {
    box-shadow: 0 -3em 0 -1em, 2em -2em 0 -1em,
     3em 0 0 -1em, 2em 2em 0 -1em, 0 3em 0 0, 
     -2em 2em 0 0.2em, -3em 0 0 0, -2em -2em 0 -1em;
  }
  75% {
    box-shadow: 0em -3em 0 -1em, 2em -2em 0 -1em, 
    3em 0em 0 -1em, 2em 2em 0 -1em, 0 3em 0 -1em, 
    -2em 2em 0 0, -3em 0em 0 0.2em, -2em -2em 0 0;
  }
  87.5% {
    box-shadow: 0em -3em 0 0, 2em -2em 0 -1em, 
    3em 0 0 -1em, 2em 2em 0 -1em, 0 3em 0 -1em, 
    -2em 2em 0 0, -3em 0em 0 0, -2em -2em 0 0.2em;
  }
`;

const Loader3 = styled.span`
  color: ${(props) => props.theme.colors.white};
  font-size: 4px;
  width: 1em;
  height: 1em;
  border-radius: 50%;
  position: relative;
  left: 5px;
  text-indent: -9999em;
  animation: ${mulShdSpin} 1.3s infinite linear;
  transform: translateZ(0);
`;

export const MultipleShadowsSpinner = () => <Loader3/>;
