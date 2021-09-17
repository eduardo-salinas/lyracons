import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
*{
    box-sizing: border-box;
    margin:0;
    padding:0;
    z-index: -1;  
    font-family: 'Montserrat', sans-serif;
}
.real-winter a:hover {
    .title h1{  
    background-color: blue;
    color:red;  
    }
}
.real-winter{
    background-color: blue;
}
.title h1{
    background-color: red;
}
`


export default GlobalStyles;