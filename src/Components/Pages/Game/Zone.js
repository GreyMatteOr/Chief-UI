import { createRef, useEffect, useState } from 'react';
import Worker from './Worker.js';

export default function Zone(props) {
  let {left, team, top, type} = props
  let [ref] = useState( createRef() )
  let [bottom, setBottom] = useState( null )
  let [right, setRight] = useState( null )

  useEffect( () => {
    if ( ref.current ) {
      let { offsetWidth, offsetHeight } = ref.current
      setRight( offsetWidth + left );
      setBottom( top + offsetHeight );
      console.log( left, top, bottom, right)
    }
  }, [ref])

  let components = {
    'Worker': Worker
  }

  let Receives = components[ type ]

  return <Receives isZone={true} left={left} team={team} top={top} />
}
