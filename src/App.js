import { addWorker, removeWorker } from './Components/Pages/Game/workerFx.js';

import Board from './Components/Pages/Game/Board.js'

function App() {

  return (
    <div className="App">
      <Board />
      <section style={{
        'display': 'flex',
        'justifyContent': 'center',
        'alignContent': 'center',
        'marginTop': '50%'
      }}>
        <button onClick={ () => addWorker.Blue() }>AB</button>
        <button onClick={ () => addWorker.Green() }>AG</button>
        <button onClick={ () => addWorker.Red() }>AR</button>
        <button onClick={ () => addWorker.Yellow() }>AY</button>
        <button onClick={ () => removeWorker.Blue() }>RB</button>
        <button onClick={ () => removeWorker.Green() }>RG</button>
        <button onClick={ () => removeWorker.Red() }>RR</button>
        <button onClick={ () => removeWorker.Yellow() }>RY</button>
      </section>
    </div>
  );
}

export default App;
