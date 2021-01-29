import Blip from './Blip.js'
import { workerColors } from '../../../Styling/colors.js';
import { dragmove } from '../../../dragmove';
import { useEffect, useState, createRef } from 'react';

export default function Worker (props) {
  let { econ, hr, sec, team, tech } = props
  let creds = {econ, hr, sec, tech}
  let [node] = useState( createRef() )

  function getCreds() {
    return Object.entries( creds ).map( ( [key, val], i ) => {
      return <Blip active={val} cred={key} key={`${team}-${i}`} />
    })
  }

  useEffect( () => {
    dragmove(node.current, node.current)
  }, [] )

  return (
    <div
      data-testid='worker'
      ref={node}
      style={{
        'backgroundColor': workerColors[team],
        'border': '1px solid black',
        'borderRadius': '.25em',
        'display': 'grid',
        'gridGap': '.125em',
        'gridTemplateColumns': '2',
        'gridTemplateRows': '2',
        'left': '0px',
        'top': '0px',
        'padding': '.125em',
        'position': 'fixed'
      }}
      > { getCreds() }</div>
  )
}
