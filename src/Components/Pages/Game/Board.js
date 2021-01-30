import Player from './Player.js';
import { useState } from 'react';

export default function Board(props) {
  let [creds, setCreds] = useState({econ:true,hr:true,sec:true,tech:true})
  let {econ, hr, sec, tech} = creds
  return (
    <>
      { ['Red', 'Yellow', 'Green', 'Blue'].map( (team, i) => {
        return (
          <Player
            econ={econ}
            hr={hr}
            key={`${team}-player`}
            sec={sec}
            team={team}
            tech={tech}
          />
        )
      } ) }
    </>
  )
}
