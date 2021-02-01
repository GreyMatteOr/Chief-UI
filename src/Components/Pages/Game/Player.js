import { addWorker, removeWorker } from './workerFx.js';
import { boardColors } from '../../../Styling/colors.js';
import { useEffect, useState } from 'react';
import Worker from './Worker';

export default function Player(props) {
  let { team } = props
  let [workers, setWorkers] = useState([])

  let displayPositions = {
    'Blue': ['bottom', 'right'],
    'Green': ['bottom', 'left'],
    'Red': ['top', 'left'],
    'Yellow': ['top', 'right']
  }
  let [pos1, pos2] = displayPositions[ team ]

  function displayWorkers() {
    return workers.map( ({econ, hr, sec, team, tech}, i) => {
      return (
        <Worker
          econ={econ}
          hr={hr}
          key={`${team}-${i}`}
          sec={sec}
          team={team}
          tech={tech}
        />
      )
    })
  }

  useEffect( () => {
    addWorker[team] = (econ=false, hr=false, sec=false, tech=false) => {
      setWorkers( [...workers, {econ,hr,sec,team,tech}] )
    }

    removeWorker[team] = ( index = 0 ) => {
      if (0 <= index && index < workers.length) {
        workers.splice(index, 1)
        setWorkers( [...workers] )
      }
    }
  }, [] )

  return (
    <section
      data-testid='player'
      style={{
        'backgroundColor': boardColors[team],
        'border': '1px solid black',
        'height': '25%',
        'width': '30%',
        'position': 'absolute',
        [pos1]: 0,
        [pos2]: 0,
        'zIndex': -1
      }}
    >
      <h1 style={{'margin':'auto', 'textAlign':'center'}}>Player!</h1>
      {displayWorkers()}
    </section>
  )
}
