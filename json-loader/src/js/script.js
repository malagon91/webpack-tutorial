import '../css/style.css';
import { first,delayedMessage } from "./message";
import platziImg from '../img/platzi.png'
import data from './teachers.json'
import renderToDom from './render-to-dom'
document.write(first)
delayedMessage();
data.teachers.forEach(element => {
    const el  = document.createElement('li');
    el.textContent = element.name;
    renderToDom(el);
});
const img = document.createElement('img')
img.setAttribute('src',platziImg);
document.body.append(img)