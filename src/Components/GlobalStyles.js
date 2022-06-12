import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`
    ${reset};
    html {
        font-size: 16px;
    }
    body {
        margin: 0;
        padding: 0;
    }
    a{
        text-decoration:none;
        color:inherit;
    }
    *{
        box-sizing:boerder-box;
    }
    body{
        font-family: 'Ubuntu', sans-serif;
        font-size: 16px;
        background-color:rgba(20,20,20,1);
    }
`;

export default GlobalStyles;
