import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: #0d0d0d;
    color: #eaeaea;
    font-family: "Poppins", sans-serif;
    line-height: 1.6;
  }

  img {
    max-width: 100%;
    display: block;
  }

  a {
    color: #ff9800;
    transition: color 0.3s ease;
  }

  a:hover {
    color: #ffc107;
  }
`;

export default GlobalStyle;
