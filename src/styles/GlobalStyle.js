import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: linear-gradient(-45deg, #0d0d0d, #1a1a1a, #0d0d0d, #1a1a1a);
    background-size: 400% 400%;
    animation: gradientBG 15s ease infinite;
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

  @keyframes gradientBG {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }
`;

export default GlobalStyle;
