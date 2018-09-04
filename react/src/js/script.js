import '../css/style.css';
import { first,delayedMessage } from "./message";
import platziImg from '../img/platzi.png'
import data from './teachers.json'
import renderToDom from './render-to-dom'
import React, { Component } from 'react'
import {render} from 'react-dom'

const Teacher = (props) =>(
    <li className="teacher">
        {props.name} <a href="https://www.google.com.mx">{props.twitter}</a>
    </li>
)

class Teachers extends Component {
  render() {
    return (
      <div>
        <ul className="teachers">
        {this.props.data.teachers.map((teac) =>{
            return <Teacher {...teac}/>
        })}
            
        </ul>
      </div>
    )
  }
}

render(<Teachers data = {data}/>, document.getElementById('container'))
// data.teachers.forEach(element => {
//     const el = document.createElement('li');
//     el.textContent = element.name;
//     renderToDom(el);
// });
const img = document.createElement('img')
img.setAttribute('src',platziImg);
document.body.append(img)