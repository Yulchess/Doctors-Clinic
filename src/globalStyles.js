import "normalize.css";

import { createGlobalStyle } from "styled-components";

import RobotoBold from "./assets/fonts/RobotoBold.woff2";
import RobotoRegular from "./assets/fonts/RobotoRegular.woff2";
import { theme } from "./theme";

export default createGlobalStyle`
  * {
    @font-face {
        font-family: ${theme.primaryFont};
        src: local('Roboto-Regular'), local('Roboto-Bold'),
        url(${RobotoRegular}) format('woff2');
      
        font-weight: ${({ theme }) => theme.fontWeight[1]};
          font-style: normal;
        }

   @font-face {
        font-family: ${theme.secondaryFont};
        src: local('Roboto-Regular'), local('Roboto-Bold'),
  
        url(${RobotoBold}) format('woff2');
        font-weight: ${({ theme }) => theme.fontWeight[1]};
          font-style: normal;
        }
          body {
            font-family:  ${theme.secondaryFont};
         
              margin: ${theme.spacing[0]};
              padding:${theme.spacing[0]};
              box-sizing: border-box;
              background-color: ${theme.colors.primary};

}
  
  } 
  `;
