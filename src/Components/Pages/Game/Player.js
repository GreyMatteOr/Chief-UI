import { addWorker, getId, removeWorker } from './workerFx.js';
import { boardColors } from '../../../Styling/colors.js';
import { useEffect, useState } from 'react';
import Worker from './Worker';

export default function Player(props) {
  let { team } = props
  let [workers, setWorkers] = useState([])

  function displayWorkers() {
    return workers.map( id => <Worker id={id} key={`worker-${id}`} team={team} /> )
  }

  useEffect( () => {
    addWorker[team] = () => {
      workers.push( getId() )
      setWorkers( [...workers] )
    }

    removeWorker[team] = ( index = 0 ) => {
      if (0 <= index && index < workers.length) {
        workers.splice( index, 1 )
        setWorkers( [...workers] )
      }
    }
  }, [team, workers] )

  return (
    <section
      data-testid='player'
      style={{
        'backgroundColor': boardColors[team],
        'border': '1px solid black',
        'height': '100%',
        'width': '25%'
      }}
    >
      <h1 style={{'margin':'auto', 'textAlign':'center'}}>Player!</h1>
      {displayWorkers()}
    </section>
  )
}
