import React from 'react';
import logo from './logo.svg';
import './App.css';
import test from "./Util/xlsxparse";
import API from "./Util/API";
let a;
function handlefile(e) {
  console.log(e.target.files);
  test(e.target.files[0], API);
  console.log("val returned" + a);
}

function handleClick(){
  API.getStudents().then(data =>{
    console.log(data.data);
  })
}
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <input type="file" onChange={handlefile}></input>
          <button onClick={handleClick}>Click here to get students</button>
        </div>
      </header>

    </div>

  );
}

export default App;
