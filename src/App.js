import React, {useState} from 'react';
import Player, {addWorker, removeWorker} from './Components/Pages/Game/Player.js'

function App() {
  let [creds, setCreds] = useState({econ:true,hr:true,sec:true,tech:true})
  function toggleCred( cred ) {
    let val = !creds[ cred ]
    console.log(cred, val)
    setCreds( {...creds, [cred]: val} )
  }

  let {econ, hr, sec, tech} = creds
  return (
    <div className="App">
      <Player econ={econ} hr={hr} sec={sec} team='Red' tech={tech} />
      <button onClick={() => addWorker()}>add!</button>
      <button onClick={() => removeWorker()}>remove!</button>
    </div>
  );
}

export default App;
