import { createGlobalStyle } from 'styled-components';

import { fontWeight } from './theme';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 16px;
  }
  
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: gray;
    color: ${({ theme }) => theme.palette.gray[9]};
    background-color: white;
    transition: all 0.3s ease;
  }

  main {
    width: 100%;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
  }


  h1, h2, h3, h4, h5, h6 {
		color: ${({ theme }) => theme.brand.headline};
	}

  p {
    font-size: 1.25rem; font-weight: ${fontWeight.normal}; line-height: 175%;
    color: white;
  }
  
  a {
		background-color: transparent;
		color: ${({ theme }) => theme.brand.text};

		&:hover {
			text-decoration: none;
		}
	}

  a, button {
    cursor: pointer;
  }

  button {
    outline: none;
  }

  ul {
		list-style: none;
		padding: 0;
	}
`;
