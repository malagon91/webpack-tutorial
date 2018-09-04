import '../css/style.css';
import { first,delayedMessage } from "./message";
import platziImg from '../img/platzi.png'
import wVideo from '../video/que-es-core.webm'
import mVideo from '../video/que-es-core.mp4'
document.write(first)
delayedMessage();
const img = document.createElement('img')
img.setAttribute('src',platziImg);
img.setAttribute('width',50);
img.setAttribute('height',50);
document.body.append(img)

const m1 = document.createElement('video')
m1.setAttribute('src',mVideo);
m1.setAttribute('width',480);
m1.setAttribute('autoplay',true);
m1.setAttribute('controls',true);
document.body.append(m1)

// const m2 = document.createElement('video')
// img.setAttribute('src',wVideo);
// img.setAttribute('width',50);
// img.setAttribute('height',50);
// document.body.append(m2)