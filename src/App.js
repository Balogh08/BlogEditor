import {ThemeProvider} from "styled-components";
import theme, {GlobalStyle} from "./styles";
import {BlogPage} from "./features/CKEditor";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BlogPage/>
    </ThemeProvider>
  );
}

export default App;
