import Player from './Player.js';

export default function Board(props) {

  return (
    <div
      data-testid='board'
      style={{
        'display': 'flex',
        'height': '30vh'
      }}
    >
      { ['Red', 'Yellow', 'Green', 'Blue'].map( (team, i) => <Player key={`${team}-player`} team={team} /> ) }
    </div>
  )
}
