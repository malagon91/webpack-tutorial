import './style.css';
import { first,delayedMessage } from "./message";
import platziImg from './platzi.png'
document.write(first)
delayedMessage();
const img = document.createElement('img')
img.setAttribute('src',platziImg);
document.body.append(img)