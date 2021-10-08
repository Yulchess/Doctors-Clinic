import React from "react";
import { theme } from "../../theme";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "../../globalStyles";
import { Content } from "./style";
import { Header } from "../Header";
import { Main } from "../Main";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Content>
        <Header />
        <Main />
      </Content>
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default App;
