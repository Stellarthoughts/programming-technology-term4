import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { AppThemeLight, AppThemeDark } from './Theme/theme';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
		<ThemeProvider theme={AppThemeLight}>
			<CssBaseline enableColorScheme/>
			<App />
		</ThemeProvider>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
