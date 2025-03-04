import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

  #root {
    height: 100vh;
    width: 100vw;
    overflow: hidden;
  }
  
  html {
      font-size: 62.5%;

      @media (min-width: 1025px) and (max-width: 1280px) {
          font-size: 52.5%;
      }
      
      @media screen and (max-width: 1024px) and (max-height: 600px) {//for mac
          font-size: 38.5%;
      }
  }
  
  
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;      
 
  }
   

  ::-webkit-scrollbar {
      width: 3px;
      height: 3px;
  }

  ::-webkit-scrollbar-thumb {
      background: #919191 !important;
      height: 8px;
  }
`;
