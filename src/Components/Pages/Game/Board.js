import Player from './Player.js';

export default function Board(props) {

  return (
    <div data-testid='board'>
      { ['Red', 'Yellow', 'Green', 'Blue'].map( (team, i) => <Player key={`${team}-player`} team={team} /> ) }
    </div>
  )
}
