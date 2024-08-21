import {ThemeProvider} from "styled-components";
import theme, {GlobalStyle} from "./styles";
import {BlogEditor} from "./features/CKEditor";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      React Starter App
      <BlogEditor/>
    </ThemeProvider>
  );
}

export default App;
