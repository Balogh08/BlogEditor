import {ThemeProvider} from "styled-components";
import theme, {GlobalStyle} from "./styles";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      React Starter App
    </ThemeProvider>
  );
}

export default App;
