import { addWorker, removeWorker, toggleBlip } from './Components/Pages/Game/workerFx.js';

import Board from './Components/Pages/Game/Board.js'
import Zone from './Components/Pages/Game/Zone.js'

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
        <Zone left={100} team='Red' top={100} type='Worker'/>
        <Zone left={200} team='Blue' top={200} type='Worker'/>
        <Zone left={300} team='Green' top={300} type='Worker'/>
        <Zone left={400} team='Yellow' top={400} type='Worker'/>
      </section>
    </div>
  );
}

window.tx = toggleBlip

export default App;
