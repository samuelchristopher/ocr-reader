import React, { Component } from 'react';
import OcrReader from './OcrReader'
import './App.css';

class App extends Component {
  constructor() {
    super()
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(e) {
    console.log('its ocr time boyy')
    console.log(this)
  }

  render() {
    return (
      <div className="App">
        <p id="inst">select an image</p>
        <input ref="fileThing" type="file" label="#inst"/>
        <button onClick={this.handleClick}>Do OCR</button>
      </div>
    );
  }
}

export default App;
