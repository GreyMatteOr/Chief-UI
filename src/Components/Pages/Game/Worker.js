import { useEffect, useState, createRef } from 'react';
import { dragmove } from '@knadh/dragmove'

let toggleCred;
export default function Worker (props) {
  let { econ, hr, sec, tech } = props
  let [creds, setCreds] = useState( {econ, hr, sec, tech} )
  let [node] = useState( createRef() )

  function getCreds() {
    return Object.entries( creds ).reduce( ( c, [key, val] ) => {
      return val ? `${c} + ${key}` : c
    }, '')
  }

  toggleCred = ( cred ) => {
    console.log(cred)
    if ( Object.keys( creds ).includes( cred ) ) {
      setCreds( { ...creds, [cred]: !creds[ cred ] } )
    }
  }

  useEffect( () => {
    dragmove(node.current, node.current)
  }, [] )

  return (
    <h1
      ref={node}
      style={{
        'left': '0px',
        'top': '0px',
        'position': 'fixed'
      }}
      >WORKER { getCreds() }</h1>
  )
}

export { toggleCred }
