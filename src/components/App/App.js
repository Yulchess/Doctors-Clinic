import React from "react";
import { ThemeProvider } from "styled-components";

import { Header } from "@/components/Header";
import { Main } from "@/components/Main";
import GlobalStyles from "@/globalStyles";
import { theme } from "@/theme";

import { Content } from "./style";

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
