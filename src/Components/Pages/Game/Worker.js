import Blip from './Blip.js';
import { dragmove } from '../../../dragmove';
import { disableMove, enableMove, toggleBlip } from './actions/workerFx.js';
import { createRef, useEffect, useState } from 'react';
import { workerColors } from '../../../Styling/colors.js';
import { zoneChecker } from './actions/zoneFx.js';

export default function Worker (props) {
  let { id, isFull, isZone, left, team, top } = props
  let [creds, setCreds] = useState( {econ: false, hr: false, sec: false, tech: false} )
  let [dragEnabled, setDragEnabled] = useState('true')
  let [ref] = useState( createRef() )

  function getCreds() {
    return Object.entries( creds ).map( ( [key, val], i ) => {
      return <Blip active={val} cred={key} key={`${team}${id}-${key}`} />
    })
  }

  useEffect( () => {
    if (!isZone) {
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
    }
  }, [ref] )

  let color = isZone ? workerColors[`${team}Zone`] : workerColors[team]
  return (
    <div
      data-drag-enabled={ dragEnabled }
      data-id={id}
      data-isfull={isFull}
      data-testid={ isZone ? 'worker-zone' : 'worker' }
      data-type={ isZone ? 'worker-zone' : 'worker' }
      ref={ref}
      style={{
        'backgroundColor': color,
        'border': isZone ? '4px solid #a31582' : '1px solid black',
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
