import { createGlobalStyle } from "styled-components";
import { theme } from "./theme";
import RobotoRegular from "./assets/fonts/RobotoRegular.woff2";
import RobotoBold from "./assets/fonts/RobotoBold.woff2";

export default createGlobalStyle`
  * {
    @font-face {
        font-family: ${theme.primaryFont};
        src: local('Roboto-Regular'), local('Roboto-Bold'),
        url(${RobotoRegular}) format('woff2');
      
        font-weight: 900;
          font-style: normal;
        }

   @font-face {
        font-family: ${theme.secondaryFont};
        src: local('Roboto-Regular'), local('Roboto-Bold'),
  
        url(${RobotoBold}) format('woff2');
        font-weight: 900;
          font-style: normal;
        }
          body {
            font-family:  ${theme.secondaryFont};
         
              margin: 0;
              padding:0;
              box-sizing: border-box;
              background-color: ${theme.colors.primary};

}
  
  } 
  `;
