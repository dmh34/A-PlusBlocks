import React from 'react';
import logo from './logo.svg';
import './App.css';
import test from "./Util/xlsxparse";
let a;
function handlefile(e) {
  console.log(e.target.files);
  a = test(e.target.files[0]);
  console.log("val returned" + a);
}
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <input type="file" onChange={handlefile}></input>
        </div>
      </header>

    </div>

  );
}

export default App;
