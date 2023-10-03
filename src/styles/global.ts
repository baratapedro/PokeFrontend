import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        
        font-family: 'Poppins', sans-serif;

        background: transparent;
    }

    main {
        background-color: #f1f1f1;
        min-height: calc(100vh - 64px);
    }
`