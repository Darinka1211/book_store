import React, {ReactElement} from 'react';

import './App.scss';
import { Button } from "./components/Button/Button"
import {Input} from "./components/Input/Input"


function App() {
   return (
    <div className="App">
     <h1>Hello</h1>
     <Button className="button--add_to_card"  text="add to card" />
     <Input title="Title" placeholder="Placeholder" />
      <Input
        type="email"
        title="Title"
        placeholder="Placeholder"
        error={true}
        
        disabled
      />
      <Input type="password" title="Title" placeholder="Placeholder" />
   
    </div>
  );
}

export default App;
