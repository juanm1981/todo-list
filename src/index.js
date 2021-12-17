import "./style.css"
import { renderUi } from './ui.js';
import { startStorage } from './functions.js';



startStorage();
renderUi();

console.log(localStorage);