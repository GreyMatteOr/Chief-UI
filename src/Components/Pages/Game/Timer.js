import { useState, useEffect } from 'react';
import gdate from 'gdate';

const { second } = gdate;
let restart;

export default function Timer( props ) {
  let [finish, setFinish] = useState( gdate.advance().by( props.duration * second ) )
  let [timeLeft, setTimeLeft] = useState( gdate.get( second ).between( finish ) )
  let [updateIds, setUpdateIds] = useState( [] )

  let clearUpdates = () => {
    updateIds.forEach( updateId => window.clearTimeout( updateId ) )
    setUpdateIds( [] )
  }

  restart = ( duration ) => {
    clearUpdates()
    setFinish( gdate.advance().by( duration * second ) )
    setTimeLeft( duration )
  }

  useEffect( () => {
    if ( gdate.is().before( finish ) )  {
      updateIds.push( window.setTimeout( () => {
        clearUpdates()
        let t = gdate.get( second ).between( finish )
        setTimeLeft( gdate.is().before( finish ) ? t : 0 )
      }, 1000) )
    }
    return clearUpdates
  }, [timeLeft, finish])


  return (
    <h1
      data-testid="timer"
      style={{
        "border": "1px solid gray",
        "borderRadius": "5px",
        "fontFamily": "Yusei Magic, sans-serif",
        "margin": "auto",
        "minWidth": "2em",
        "maxWidth": "fit-content",
        "textAlign": "center"
      }}
    >{Math.ceil( timeLeft )}</h1>
  )
}

export { restart };
