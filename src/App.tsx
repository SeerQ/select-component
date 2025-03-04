import { GlobalStyle } from "./styles/globalStyles.ts";
import { ThemeProvider, StyleSheetManager } from "styled-components";
import isPropValid from '@emotion/is-prop-valid';

import { theme } from "./styles/theme.ts";
import { FormExample } from "./components/appComponents/FormExample/FormExample.tsx";

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <StyleSheetManager shouldForwardProp={(prop) => isPropValid(prop)}>
          <FormExample />
        </StyleSheetManager>
      </ThemeProvider>
      <GlobalStyle />
    </>
  );
}

export default App;
