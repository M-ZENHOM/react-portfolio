import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

html {
  scroll-behavior: smooth;
}

body {
  background-color: ${({ theme }) => theme.colors.Main};
  font-family: ${({ theme }) => theme.fonts.MainFont};
  overflow-x: hidden;

}

button,
input {
  outline: none;
  border: none;
}

li {
  list-style: none;
}

a {
  text-decoration: none;
}

`;
