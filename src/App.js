import React from 'react';
import Worker, { toggleCred } from './Components/Pages/Game/Worker.js'

function App() {
  return (
    <div className="App">
      <Worker econ={true} hr={true} sec={true} tech={true} />
      <button onClick={() => toggleCred('tech')}>Toggle!</button>
    </div>
  );
}

export default App;
