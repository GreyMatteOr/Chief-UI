import React, {useState} from 'react';
import Worker from './Components/Pages/Game/Worker.js'

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
      <Worker econ={econ} hr={hr} sec={sec} team='Yellow' tech={tech} />
      <button onClick={() => toggleCred('econ')}>Toggle!</button>
    </div>
  );
}

export default App;
