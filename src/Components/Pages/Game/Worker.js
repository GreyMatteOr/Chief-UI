import Blip from './Blip.js';
import { dragmove } from '../../../dragmove';
import { toggleBlip } from './workerFx.js';
import { useEffect, useState, createRef } from 'react';
import { workerColors } from '../../../Styling/colors.js';

export default function Worker (props) {
  let { id,  isZone, left, team, top } = props
  let [creds, setCreds] = useState( {econ: false, hr: false, sec: false, tech: false} )
  let [node] = useState( createRef() )

  function getCreds() {
    return Object.entries( creds ).map( ( [key, val], i ) => {
      return <Blip active={val} cred={key} key={`${team}${id}-${key}`} />
    })
  }

  useEffect( () => {
    if (!isZone) {
      dragmove(node.current, node.current)

      toggleBlip[id] = ( cred ) => {
        creds[ cred ] = !creds[ cred ]
        setCreds( { ...creds } )
      }

      return function removeFx() {
        delete toggleBlip[id];
      }
    }
  }, [node] )

  let color = isZone ? workerColors[`${team}Zone`] : workerColors[team]
  return (
    <div
      data-testid={ isZone ? 'worker-zone' : 'worker' }
      ref={node}
      style={{
        'backgroundColor': color,
        'border': '1px solid black',
        'borderRadius': '.25em',
        'display': 'grid',
        'gridGap': '.125em',
        'gridTemplateColumns': '2',
        'gridTemplateRows': '2',
        'left': left,
        'minHeight': 20,
        'minWidth': 20,
        'top': top,
        'padding': '.125em',
        'position': isZone ? 'fixed' : 'absolute',
        'zIndex': isZone ? 10 : 100
      }}
      > { isZone ? <></> : getCreds() }</div>
  )
}
