import React, { useState } from 'react';

import './App.css';

import UseStateExample from './useState-example';
import MyContext from './my-context';

function App() {
  const [showChild, setShowChild] = useState(true);

  function renderChild() {
    if (showChild === true) {
      return (
        <MyContext.Provider value={15}>
          <UseStateExample />
        </MyContext.Provider>
      );
    }
  }
  return (
    <div className="App">
      {renderChild()}
      <button onClick={() => setShowChild(false)}>Hide</button>
    </div>
  );
}

export default App;
