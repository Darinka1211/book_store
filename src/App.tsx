import React from 'react';

import './App.scss';
import { Button } from './components/Button';
// import Cancelcross from "./components/Button/icon/Cancelcross.svg"

function App() {
  return (
    <div className="App">
     <h1>Hello</h1>
     <Button className="button--add_to_card"  text="add to card" />
     {/* <Button className="button--cross" icon={Cancelcross}/> */}
    </div>
  );
}

export default App;
