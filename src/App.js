import React from 'react';
// import logo from './logo.svg';
import './App.css';

class Header {
    constructor(img, h1, h2) {
        this.src = img;
        this.h1 = h1;
        this.h2 = h2;
    }
}
let img = 'https://cdn2.iconfinder.com/data/icons/science-162/512/486_Physics_React_Science-512.png';
let header =  new Header(img, 'Hello', 'world');
console.log(header);

function App() {
  return (
    <div className="App">
      <header className="App-header">123
        {/*<img src={logo} className="App-logo" alt="logo" />*/}
        {/*<p>*/}
        {/*  Отредактируйте <code>src/App.js</code> и сохраните.*/}
        {/*</p>*/}
        {/*<a*/}
        {/*  className="App-link"*/}
        {/*  href="https://reactjs.org"*/}
        {/*  target="_blank"*/}
        {/*  rel="noopener noreferrer"*/}
        {/*>*/}
        {/*  Изучайте Реакт*/}
        {/*</a>*/}
        <h1>1</h1>
          <h2>2</h2>


      </header>
    </div>
  );
}

export default App;
