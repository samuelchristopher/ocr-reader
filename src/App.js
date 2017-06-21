import React, { Component } from 'react';
import OcrReader from './OcrReader'
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.handleClick = this.handleClick.bind(this)
    this.state = {
      output: 'ksj'
    }
  }

  handleClick(e) {
    console.log('its ocr time boyy')
    console.log(this.refs.image)
    OcrReader(this.refs.image)
  }

  render() {
    return (
      <div className="App">
        <p id="inst">select an image</p>
        <img ref="image" src="/imgs/black-on-white.png"/>
        <button onClick={this.handleClick}>Do OCR</button>
      </div>
    );
  }
}

export default App;
