import React from 'react';
import Timer, { restart } from './Components/Pages/Game/Timer.js'

function App() {
  return (
    <div className="App">
      <Timer duration={19} />
      <button onClick={() => restart(5)}>Restart!</button>
    </div>
  );
}

export default App;
