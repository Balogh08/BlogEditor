import {createGlobalStyle} from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    color: ${(props) => props.theme.fonts.arialRegular17.color};
    font-family: ${(props) => props.theme.fonts.arialRegular17.fontFamily};
    font-style: ${(props) => props.theme.fonts.arialRegular17.fontStyle};
    line-height: ${(props) => props.theme.fonts.arialRegular17.lineHeight};
    font-size: ${(props) => props.theme.fonts.arialRegular17.fontSize};
    font-weight: ${(props) => props.theme.fonts.arialRegular17.fontWeight};
  }
  * {
    box-sizing: border-box;
  }

  /* Allow scrolling with hidden scrollbars for all elements */
  body, html {
    overflow: -moz-scrollbars-none;
    -ms-overflow-style: none;
    scrollbar-width: none; /* Firefox */
  }
  
  /* Webkit-based browsers (Chrome, Safari) */
  body::-webkit-scrollbar, html::-webkit-scrollbar {
    display: none; /* Hide scrollbars */
  }

  /* Apply the styles to all elements */
  *::-webkit-scrollbar {
    display: none; /* Hide scrollbars */
  }

  * {
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none; /* Firefox */
  }
`;

export default GlobalStyle;
