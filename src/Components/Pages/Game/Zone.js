import { useEffect, useState } from 'react';
import { emptyZone, fillZone } from './actions/zoneFx.js';
import { getId } from './actions/idGenerator.js';
import Worker from './Worker.js';

export default function Zone(props) {
  let {left, team, top, type} = props
  let [ id ] = useState( getId() )
  let [ isFull, setIsFull ] = useState( false )

  let components = {
    'Worker': Worker
  }
  let Receives = components[ type ]

  useEffect( () => {
    emptyZone[ id ] = () => setIsFull( false )
    fillZone[ id ] = () => setIsFull( true )
    return () => {
      delete emptyZone[ id ]
      delete emptyZone[ id ]
    }
  }, [] )

  return (
    <Receives
      id={id}
      isFull={isFull}
      isZone={true}
      left={left}
      team={team}
      top={top}
    />
  )
}
