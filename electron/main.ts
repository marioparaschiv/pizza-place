import { app, BrowserWindow, screen } from 'electron';
import path from 'node:path';

// The built directory structure
//
// ├─┬─┬ dist
// │ │ └── index.html
// │ │
// │ ├─┬ dist-electron
// │ │ ├── main.js
// │ │ └── preload.js
// │
process.env.DIST = path.join(__dirname, '../dist');
process.env.PUBLIC = app.isPackaged ? process.env.DIST : path.join(process.env.DIST, '../public');

// 🚧 Use ['ENV_NAME'] avoid vite:define plugin - Vite@2.x
const VITE_DEV_SERVER_URL = process.env['VITE_DEV_SERVER_URL'];

app.whenReady().then(() => {
	const { width, height } = screen.getPrimaryDisplay().size;

	const window = new BrowserWindow({
		titleBarOverlay: false,
		autoHideMenuBar: true,
		minHeight: height / 1.5,
		minWidth: width / 2
	});


	if (VITE_DEV_SERVER_URL) {
		window.loadURL(VITE_DEV_SERVER_URL);
	} else {
		window.loadFile(path.join(process.env.DIST, 'index.html'));
	}
});
