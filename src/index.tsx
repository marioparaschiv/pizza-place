/// <reference types='vite/client' />

import { Experimental_CssVarsProvider as CssVarsProvider } from '@mui/material';
import ReactDOM from 'react-dom/client';
import React from 'react';
import App from './app';

if (!localStorage.getItem('mui-mode')) {
	localStorage.setItem('mui-mode', 'dark');
}

const element = document.getElementById('root') as HTMLElement;
const root = ReactDOM.createRoot(element);

root.render(
	<React.StrictMode>
		<CssVarsProvider>
			<App />
		</CssVarsProvider>
	</React.StrictMode>
);