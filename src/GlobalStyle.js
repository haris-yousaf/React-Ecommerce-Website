import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

* {
    box-sizing: border-box;
  }
  
  body {
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    background-color: black;
    color: white;
    margin: 0;
    box-sizing: border-box;
  }
  
  .main{
    margin-top: 100px;
    border: 1px solid red;
    background-color: #ffffff;
    min-height: 500px;
    padding: 20px 40px;
  }`