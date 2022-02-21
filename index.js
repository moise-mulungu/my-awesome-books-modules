import * as scriptFile from './modules/script.js';
import * as navbarFile from './modules/navbar.js';
import * as classFile from './modules/class.js';
import * as currentTime from 'moules/datetime.js';
scriptFile.time.textContent = '';
setInterval(() => { main.time.textContent = `${yourcurrentTime.currentTime}`; }, 1000);