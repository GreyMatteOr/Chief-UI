import { useState, useEffect } from 'react';
import gdate from 'gdate';

const { second } = gdate;
let restart;

export default function Timer( props ) {
  let [finish, setFinish] = useState( gdate.advance().by( 19 * second ) )
  let [timeLeft, setTimeLeft] = useState( gdate.get( second ).between( finish ) )
  let [updateIds, setUpdateIds] = useState( [] )

  let clearUpdates = () => {
    updateIds.forEach( updateId => window.clearTimeout( updateId ) )
    setUpdateIds( [] )
  }

  restart = ( num ) => {
    clearUpdates()
    setFinish( gdate.advance().by( num * second ) )
    setTimeLeft( num )
  }

  if ( gdate.is().before( finish ) )  {
    updateIds.push( window.setTimeout( () => {
      clearUpdates()
      let t = gdate.get( second ).between( finish )
      setTimeLeft( gdate.is().before( finish ) ? t : 0 )
    }, 1000) )
  }

  return (
    <h1 style={{
      "border": "1px solid gray",
      "borderRadius": "5px",
      "fontFamily": "Yusei Magic, sans-serif",
      "margin": "auto",
      "minWidth": "2em",
      "maxWidth": "fit-content",
      "textAlign": "center"
    }}>{Math.ceil( timeLeft )}</h1>
  )
}

export { restart };
