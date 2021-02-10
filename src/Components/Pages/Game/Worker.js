import Blip from './Blip.js';
import { dragmove } from '../../../dragmove';
import { disableMove, enableMove, toggleBlip } from './actions/workerFx.js';
import { createRef, useEffect, useState } from 'react';
import { workerColors } from '../../../Styling/colors.js';
import { zoneChecker } from './actions/zoneFx.js';

export default function Worker (props) {
  let { id, left, team, top } = props
  let [creds, setCreds] = useState( {econ: false, hr: false, sec: false, tech: false} )
  let [dragEnabled, setDragEnabled] = useState('true')
  let [ref] = useState( createRef() )

  function getCreds() {
    return Object.entries( creds ).map( ( [key, val], i ) => {
      return <Blip active={val} cred={key} key={`${team}${id}-${key}`} />
    })
  }

  useEffect( () => {
    dragmove(ref.current, ref.current, undefined, zoneChecker )

    enableMove[id] = () => {
      setDragEnabled('true')
    }

    disableMove[id] = () => [
      setDragEnabled('false')
    ]

    toggleBlip[id] = ( cred ) => {
      creds[ cred ] = !creds[ cred ]
      setCreds( { ...creds } )
    }

    return function removeFx() {
      delete disableMove[id];
      delete enableMove[id];
      delete toggleBlip[id];
    }
  }, [ref] )

  let color = workerColors[team]
  return (
    <div
      data-drag-enabled={ dragEnabled }
      data-id={id}
      data-testid='worker'
      data-type='worker'
      ref={ref}
      style={{
        'backgroundColor': color,
        'border': '1px solid black',
        'borderRadius': '.25em',
        'display': 'grid',
        'gridGap': '.125em',
        'gridTemplateColumns': '2',
        'gridTemplateRows': '2',
        'left': left,
        'top': top,
        'padding': '.125em',
        'position': 'absolute',
        'zIndex': 100
      }}
      > { getCreds() }</div>
  )
}
