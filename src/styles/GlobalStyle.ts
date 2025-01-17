import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

export const GlobalStyle = createGlobalStyle`

${reset}

 a{
  text-decoration: none;
 }

* {
    box-sizing: border-box;
}
 button {
  cursor: pointer;
  padding: 0;
  margin: 0;
  background: none;
  &:hover{
   border: none;
    outline: none;
    border-color: none;
  }

  &:focus{
    border: none;
    outline: none;
  };
 }

 :root {
  --vh: 100%;
 }

 html, body{
  overflow-x :  hidden;
 }

 ::-webkit-scrollbar {
  display: none;
}
 
#root, body, html {
    margin: 0 auto;
    padding:0;
}
`;

export default GlobalStyle;
