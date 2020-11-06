import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import theme from './theme/index'
import App from './App';
import { ThemeProvider } from "styled-components"

ReactDOM.render(
    <ThemeProvider theme = {theme}>
<App />
</ThemeProvider>, 
document.getElementById('root')
);